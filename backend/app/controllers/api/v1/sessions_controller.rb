# frozen_string_literal: true
class Api::V1::SessionsController < DeviseTokenAuth::SessionsController
	
   protected
  def render_create_success
    
    full_resource = @resource.as_json(include: [:role],methods: [:full_name])
    resource_token_validation_response = @resource.token_validation_response
    full_resource.merge!(url_file: url_for(@resource&.file))  if @resource&.file.present?
 
    render json: {
      data: resource_data(resource_json: resource_token_validation_response.merge(full_resource))
    }
  end 
end 
