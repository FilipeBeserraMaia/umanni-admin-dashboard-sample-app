# frozen_string_literal: true
DeviseTokenAuth::RegistrationsController.class_eval do 



  def sign_up_params

    params.permit(*params_for_resource(:sign_up).append(:first_name,:last_name,:registration))
  end
end 
