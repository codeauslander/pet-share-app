class RemoveNameEmailPasswordFromSitters < ActiveRecord::Migration[5.1]
  def change
    remove_column :sitters, :name, :string
    remove_column :sitters, :email, :string
    remove_column :sitters, :password, :string
  end
end
