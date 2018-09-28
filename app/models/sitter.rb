class Sitter < ApplicationRecord
  has_many :swipes
  has_many :ratings

  has_attached_file :sitter_image, styles: {
    medium: '300x300>',
    large: '600x600>'
  }

  validates_attachment :sitter_image,
    content_type: {
    content_type: ["image/jpeg", "image/png"]
  }, size: { in: 0..5.megabytes }

  def score
    all_ratings = ratings.where.not(rating_by_petowner_value: nil)
    rating_array = all_ratings.pluck(:rating_by_petowner_value)
    ratings_sum = rating_array.reduce(:+).to_f
    ratings_count = all_ratings.count.to_f

    average = ratings_sum / ratings_count

    return average
  end

  def matches
    matching_swipes = swipes.where(swipe_by_sitter_value: "yes", swipe_by_petowner_value: "yes")
    sitter_id = self.id
    # sql = "SELECT * FROM swipes WHERE petowner_id = #{petowner_id} AND swipe_by_sitter_value = 'yes' AND swipe_by_petowner_value = 'yes'"
    # match_array = ActiveRecord::Base.connection.execute(sql)
    match_array = []
    matching_swipes.each do |match_swipe|
      match_array << match_swipe.petowner
    end

    # return match_array.values
    return match_array
  end

end
