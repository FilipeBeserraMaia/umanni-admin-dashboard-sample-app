# frozen_string_literal: true

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User
  
  attr_accessor :full_name
  has_one :user_role, dependent: :destroy
  has_one :role, through: :user_role
  
  before_create :set_default_user_role


  def full_name 
    "#{self.first_name.to_s} #{self.last_name.to_s}"
  end

  def set_default_user_role
    common_user_role = Role.find_by_name("user")
    self.role = common_user_role unless self.role.present?
  end


end
