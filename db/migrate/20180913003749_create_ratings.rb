class CreateRatings < ActiveRecord::Migration[5.1]
  def change
    create_table :ratings do |t|
      t.integer :petowner_id
      t.integer :sitter_id
      t.string :rating_by_sitter_value
      t.string :rating_by_petowner_value

      t.timestamps
    end
  end
end
