require 'roo'
require 'roo-xls'

class UserImportService


  def self.call(file = nil)
    return unless file.present?
    spreadsheet = Roo::Excel.new(file.path, file_warning: :ignore)  

    total = spreadsheet.last_row
    count = 0
    count_progress = -> (count,total)  {  (count.to_f/ total.to_f ) * 100 }

    users = []
    (2..spreadsheet.last_row).each_with_index do |row_number,index|
      row = spreadsheet.row(row_number)
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
      users.push(user_attr)
    end 

    ImportUsersJob.perform_later(users: users)
  end
end

