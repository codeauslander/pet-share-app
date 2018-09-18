class CreatePetowners < ActiveRecord::Migration[5.1]
  def change
    create_table :petowners do |t|
      t.string :name
      t.string :email
      t.string :password
      t.string :pet_name
      t.text :pet_bio
      t.integer :zipcode
      t.date :start_date
      t.date :end_date

      t.timestamps
    end
  end
end
