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
      render json: @user.as_json(methods: [:full_name]), status: :ok
    else
      render json: {errors: @user.errors.full_messages}, status: :unprocessable_entity  # 422
    end 

  end

  def update 
    if @user.update(user_params)
      render json: @user.as_json(methods: [:full_name]), status: :ok
    else
      render json: {errors: @user.errors.full_messages}, status: :unprocessable_entity  # 422
    end 

  end


  def edit
    render json: @user.as_json(methods: [:full_name]), status: :ok
  end


  def destroy

    if @user.destroy 
      render json: @user.as_json, status: :ok
    else
      render json: {errors: @user.errors.full_messages}, status: :unprocessable_entity # 422
    end
  end


  private

  def set_user
    @user = User.find_by_id(params[:id])
  end

  def user_params
    params.require(:user).permit(:first_name,:last_name,:password,:password_confirmation,:email)
  end

end
