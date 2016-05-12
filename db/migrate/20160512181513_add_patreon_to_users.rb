class AddPatreonToUsers < ActiveRecord::Migration
  def change
    add_column :users, :patreon, :string
  end
end
