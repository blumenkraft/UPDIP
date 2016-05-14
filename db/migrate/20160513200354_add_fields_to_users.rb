class AddFieldsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :appdotnet, :string
  end
end
