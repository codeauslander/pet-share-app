class AddImageUrLtoPetowners < ActiveRecord::Migration[5.1]
  def change
    add_column :petowners, :imageURL, :string
  end
end
