class User < ApplicationRecord
  has_secure_password
  has_one :petowner
  has_one :sitter
end
