class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :flattr
      t.string :twitter
      t.string :facebook
      t.string :bitcoin_address
      t.string :appstore_link

      t.timestamps null: false
    end
  end
end
