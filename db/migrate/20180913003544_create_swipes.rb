class CreateSwipes < ActiveRecord::Migration[5.1]
  def change
    create_table :swipes do |t|
      t.integer :petowner_id
      t.integer :sitter_id
      t.string :swipe_by_sitter_value
      t.string :swipe_by_petowner_value

      t.timestamps
    end
  end
end
