class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:update, :edit, :destroy]


  def index
    @users = User.joins(:role)

    users_json = @users.as_json(include: [:role], methods:[:full_name])
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
    if @user.update(user_params)
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
    params.require(:user).permit(:first_name,:last_name,:password,:password_confirmation,:email,
      user_role_attributes: [:id, :user_id, :role_id])
  end
  
  def  default_user_json
     @user.as_json(include:[:role], methods: [:full_name])
  end
end
