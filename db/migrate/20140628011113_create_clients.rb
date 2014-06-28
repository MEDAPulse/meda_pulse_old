class CreateClients < ActiveRecord::Migration
  def change
    create_table :clients do |t|
      t.belongs_to :user
      t.string :name, null: false
      t.string :phone, null: false
      t.string :salesforce_id, null: false
      t.string :email

      t.timestamps
    end
  end
end
