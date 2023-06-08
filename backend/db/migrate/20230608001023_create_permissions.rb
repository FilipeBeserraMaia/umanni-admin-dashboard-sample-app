class CreatePermissions < ActiveRecord::Migration[6.1]
  def change
    create_table :permissions do |t|
      t.string :permission_type
      t.string :klass, limit: 60

      t.timestamps
    end
  end
end
