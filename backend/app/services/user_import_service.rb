require 'roo'
require 'roo-xls'

class UserImportService
  def initialize(file)
    @file = file
  end

  def import_users

    spreadsheet = Roo::Excel.new(@file.path, file_warning: :ignore)

    (2..spreadsheet.last_row).each do |i|
      row = spreadsheet.row(i)
      first_name = row[0]
      last_name = row[1]
      email = row[2]
      role = row[3]
      password = row[4]

      user_attr =   {       
        first_name: first_name,
        last_name: last_name,
        email: email ,
        role: Role.find_by_name(role),
        password: password,
        password_confirmation: password
      }
      persisted_user = User.where(email: email).first_or_create!(user_attr)
    end 

  end
end

