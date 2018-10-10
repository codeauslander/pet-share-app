class AddImageUrlToSitters < ActiveRecord::Migration[5.1]
  def change
    add_column :sitters, :imageURL, :string
  end
end
