class RemoveNameEmailPasswordFromPetowners < ActiveRecord::Migration[5.1]
  def change
    remove_column :petowners, :name, :string
    remove_column :petowners, :email, :string
    remove_column :petowners, :password, :string
  end
end
