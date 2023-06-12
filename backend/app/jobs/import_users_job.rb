class ImportUsersJob < ApplicationJob


  queue_as :default

  def perform(params)


    @users = params[:users]
    total = @users.size
    count = 0
    count_progress = -> (count,total)  {  (count.to_f/ total.to_f ) * 100 }
    @users.each_with_index do |user_attr,index|

      # byebug
      persisted_user = User.where(email: user_attr[:email]).first_or_create!(user_attr)
      

      ActionCable.server.broadcast("ImportUserChannel", {progress: count_progress[ index+1, total] })
      sleep(1)
    end 

    # byebug
    ActionCable.server.broadcast("ImportUserChannel", {progress: 100 })
  end



end
