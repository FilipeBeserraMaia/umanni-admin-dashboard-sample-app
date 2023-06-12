# frozen_string_literal: true

class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :validatable
  
  include ActiveStorage::Blob::Analyzable
  include DeviseTokenAuth::Concerns::User
  attr_accessor :full_name


  validates_uniqueness_of :email
  
  has_one_attached :file
  has_one :user_role, dependent: :destroy
  accepts_nested_attributes_for :user_role, reject_if: :all_blank

  has_one :role, through: :user_role

  before_create :set_default_user_role


  def full_name 
    "#{self.first_name.to_s} #{self.last_name.to_s}"
  end

  def set_default_user_role
    common_user_role = Role.find_by_name("user")
    self.role = common_user_role unless self.user_role.present?
  end

  def url_file()
       Rails.application.routes.url_helpers.url_for(self.file)
  end


end
