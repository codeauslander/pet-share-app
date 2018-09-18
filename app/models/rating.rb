class Rating < ApplicationRecord
  belongs_to :petowner
  belongs_to :sitter
end
