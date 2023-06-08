namespace :roles_task do
  desc "Create default roles"
  task create: :environment do

    admin = Role.where(name: "admin").first_or_create()
    admin.permissions << Permission.where(permission_type:"manage",klass: "User" ).first_or_create()


    user = Role.where(name: "user").first_or_create()
    user.permissions << Permission.where(permission_type:"show",klass: "User" ).first_or_create()
    user.permissions << Permission.where(permission_type:"destroy",klass: "User" ).first_or_create()
    user.permissions << Permission.where(permission_type:"edit",klass: "User" ).first_or_create()


    admin.save && user.save 

  end

end
