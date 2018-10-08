class AddUserToSitter < ActiveRecord::Migration[5.1]
  def change
    add_column :sitters, :user_id, :integer
  end
end
