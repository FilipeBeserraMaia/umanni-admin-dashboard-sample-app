namespace :users_task do
  desc "Create default users "
  task create: :environment do

    role_admin = Role.find_by_name("admin")

    unless  User.find_by_email("admin@admin.com").present?
      user = User.new(email:"admin@admin.com",uid:"admin@admin.com",
                      first_name: "admin",last_name:"default",password:"12345678", 
                      password_confirmation:"12345678")
      user.user_role = UserRole.new(role: role_admin)
      user.save 
    end
  end

end
