class AddIntegervaluesToRatings < ActiveRecord::Migration[5.1]
  def change
    add_column :ratings, :rating_by_petowner_value, :integer
    add_column :ratings, :rating_by_sitter_value, :integer
  end
end
