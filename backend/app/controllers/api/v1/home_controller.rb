class Api::V1::HomeController < ApplicationController


  def index 
    render json: {status: "App is working "}
  end
  

end
