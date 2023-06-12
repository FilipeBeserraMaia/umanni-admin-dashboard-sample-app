class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:update, :edit, :destroy]


  def index
    @users = User.joins(:role)

    users_json = @users.map do |user|
      attr = user.as_json
      attr.merge!(role: user.role.as_json,
        full_name:user.full_name)

      attr.merge!(url_file: url_for(user&.file)) if  user.file.present?
      attr
    end

    render json: users_json
  end

  def create 

    @user = User.new(user_params.merge(password: params[:password],
      password_confirmation: params[:password_confirmation]))

    if @user.save
      render json: default_user_json, status: :ok
    else
      render json: {errors: @user.errors.full_messages}, status: :unprocessable_entity  # 422
    end 

  end

  def update 

    attrs = {}
    attrs[:first_name] = params[:first_name] if params[:first_name].present?
    attrs[:last_name] = params[:last_name]  if params[:last_name].present?
    attrs[:file] = params[:file] if params[:file].present?
    attrs[:password] = params[:password] if params[:password].present?
    attrs[:password_confirmation] = params[:password_confirmation] if params[:password_confirmation].present?

    if @user.update(attrs)
      render json: default_user_json, status: :ok
    else
      render json: {errors: @user.errors.full_messages}, status: :unprocessable_entity  # 422
    end 

  end


  def edit

    render json: default_user_json, status: :ok

  end





  def destroy

    if @user.destroy 
      render json: default_user_json, status: :ok
    else
      render json: {errors: @user.errors.full_messages}, status: :unprocessable_entity # 422
    end
  end


  def import

    UserImportService.call(params[:file])
    render json: { message: 'Import is Running' }
  end

  def roles
    @roles = Role.all
    render json: @roles.as_json, status: :ok
  end

  private

  def set_user
    @user = User.find_by_id(params[:id])
  end

  def user_params
    params.require(:user).permit(:first_name,:last_name,:password,:password_confirmation,:email,:file,
      user_role_attributes: [:id, :user_id, :role_id])
  end

  def  default_user_json
    json = @user.as_json(include:[:role], methods: [:full_name])
    json.merge!(url_file: url_for(@user.file)) if  @user.file.present?
    json
  end
end
