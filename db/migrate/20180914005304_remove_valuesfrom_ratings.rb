class RemoveValuesfromRatings < ActiveRecord::Migration[5.1]
  def change
    remove_column :ratings, :rating_by_petowner_value, :string
    remove_column :ratings, :rating_by_sitter_value, :string
  end
end
