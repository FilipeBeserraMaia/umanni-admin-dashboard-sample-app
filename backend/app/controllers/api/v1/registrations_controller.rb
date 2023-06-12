# frozen_string_literal: true
class Api::V1::RegistrationsController < DeviseTokenAuth::RegistrationsController


	
  public def sign_up_params
    params.permit(*params_for_resource(:sign_up).append(:first_name,:last_name,:registration)) 
  end

end 
