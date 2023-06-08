class CreateRoles < ActiveRecord::Migration[6.1]
  def change
    create_table :roles do |t|
      t.string :name, limit: 60

      t.timestamps
    end
  end
end
