class CreateSitters < ActiveRecord::Migration[5.1]
  def change
    create_table :sitters do |t|
      t.string :name
      t.string :email
      t.string :password
      t.integer :zipcode
      t.text :bio

      t.timestamps
    end
  end
end
