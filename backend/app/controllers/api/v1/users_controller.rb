class Api::V1::UsersController < ApplicationController


  def index
    @users = User.joins(:role)

    users_json = @users.as_json(include: [:role], methods:[:full_name])
    render json: users_json
  end

  def create 
  end


  def destroy
    @user = User.find(params[:id])
    @user.destroy

    if @user.errors.any?
      render json: {
        status: :unprocessable_entity, # 422
        errors: @user.errors.full_messages
      }
    else
      render json: {
        status: :ok, # 200
      }
    end 
  end

end
