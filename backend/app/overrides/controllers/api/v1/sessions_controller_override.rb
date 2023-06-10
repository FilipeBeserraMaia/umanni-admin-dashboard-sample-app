# frozen_string_literal: true
DeviseTokenAuth:: SessionsController.class_eval do 

  def render_create_success


    full_resource = @resource.as_json(include: [:role],methods: [:full_name])
    resource_token_validation_response = @resource.token_validation_response

    render json: {
      data: resource_data(resource_json: resource_token_validation_response.merge(full_resource))
    }
  end 
end 
