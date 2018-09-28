class AddImageToPetowner < ActiveRecord::Migration[5.1]
  def self.up
    add_attachment :petowners, :petowner_image
  end

  def self.down
    remove_attachment :petowners, :petowner_image
  end
end
