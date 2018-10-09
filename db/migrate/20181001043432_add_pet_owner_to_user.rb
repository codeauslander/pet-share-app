class AddPetOwnerToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :petowners, :user_id, :integer
  end
end
