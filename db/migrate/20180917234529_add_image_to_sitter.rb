class AddImageToSitter < ActiveRecord::Migration[5.1]
  def self.up
    add_attachment :sitters, :sitter_image
  end

  def self.down
    remove_attachment :sitters, :sitter_image
  end
end
