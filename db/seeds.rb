# User.create!([
#   {name: "JoeCool", email: "joe@cool.com", password_digest: "password"}
# ])
# Petowner.create!([
#   {pet_name: "Steve", pet_bio: "he's my best friend", zipcode: 60093, start_date: "2018-10-10", end_date: "2018-10-12", petowner_image_file_name: nil, petowner_image_content_type: nil, petowner_image_file_size: nil, petowner_image_updated_at: nil, user_id: 1, imageURL: "https://s3.us-east-2.amazonaws.com/rails-pet-app/baptist-standaert-346832-unsplash.jpg"},
#   {pet_name: "bob", pet_bio: "he's a frog", zipcode: 60201, start_date: "2018-04-04", end_date: "2018-04-05", petowner_image_file_name: nil, petowner_image_content_type: nil, petowner_image_file_size: nil, petowner_image_updated_at: nil, user_id: 1, imageURL: "https://s3.us-east-2.amazonaws.com/rails-pet-app/180516-woman-mauled-by-angry-wiener-dogs-feature.jpg"},
#   {pet_name: "spot", pet_bio: "he's a dog", zipcode: 60202, start_date: "2018-07-07", end_date: "2018-07-08", petowner_image_file_name: nil, petowner_image_content_type: nil, petowner_image_file_size: nil, petowner_image_updated_at: nil, user_id: 1, imageURL: "https://s3.us-east-2.amazonaws.com/rails-pet-app/GettyImages-597187685-58ad8e7a3df78c345b864b4f.jpg"},
#   {pet_name: "Jen", pet_bio: "she's actually a dog", zipcode: nil, start_date: nil, end_date: nil, petowner_image_file_name: "20180404_173606.jpg", petowner_image_content_type: "image/jpeg", petowner_image_file_size: 2579137, petowner_image_updated_at: "2018-09-27 00:01:45", user_id: 1, imageURL: "https://s3.us-east-2.amazonaws.com/rails-pet-app/Why_all_dogs_love_us_close_up_large.jpg"},
#   {pet_name: "Philbert", pet_bio: "he's a dog with sunglasses", zipcode: 60201, start_date: "2018-12-10", end_date: "2018-12-12", petowner_image_file_name: nil, petowner_image_content_type: nil, petowner_image_file_size: nil, petowner_image_updated_at: nil, user_id: 1, imageURL: "https://s3.us-east-2.amazonaws.com/rails-pet-app/alan-king-380383-unsplash.jpg"},
#   {pet_name: "Gilligan", pet_bio: "he's a chameleon", zipcode: 60201, start_date: "2018-11-10", end_date: "2018-11-12", petowner_image_file_name: nil, petowner_image_content_type: nil, petowner_image_file_size: nil, petowner_image_updated_at: nil, user_id: 1, imageURL: "https://s3.us-east-2.amazonaws.com/rails-pet-app/cecile-brasseur-612565-unsplash.jpg"},
#   {pet_name: "Sparky", pet_bio: "he's a frenchie", zipcode: 60201, start_date: "2018-12-10", end_date: "2018-12-12", petowner_image_file_name: nil, petowner_image_content_type: nil, petowner_image_file_size: nil, petowner_image_updated_at: nil, user_id: 1, imageURL: "https://s3.us-east-2.amazonaws.com/rails-pet-app/charles-deluvio-628938-unsplash.jpg"},
#   {pet_name: "Tim", pet_bio: "he has floppy ears", zipcode: 60093, start_date: "2018-12-10", end_date: "2018-12-12", petowner_image_file_name: nil, petowner_image_content_type: nil, petowner_image_file_size: nil, petowner_image_updated_at: nil, user_id: 1, imageURL: "https://s3.us-east-2.amazonaws.com/rails-pet-app/dogpic.jpg"},
#   {pet_name: "Precious", pet_bio: "she's a kitty", zipcode: 60626, start_date: "2018-10-10", end_date: "2018-12-10", petowner_image_file_name: nil, petowner_image_content_type: nil, petowner_image_file_size: nil, petowner_image_updated_at: nil, user_id: 1, imageURL: "https://s3.us-east-2.amazonaws.com/rails-pet-app/images.jpeg"},
#   {pet_name: "Rex", pet_bio: "she's purrrfect", zipcode: 60201, start_date: "2018-11-11", end_date: "2018-11-12", petowner_image_file_name: nil, petowner_image_content_type: nil, petowner_image_file_size: nil, petowner_image_updated_at: nil, user_id: 1, imageURL: "https://s3.us-east-2.amazonaws.com/rails-pet-app/koen-eijkelenboom-353684-unsplash.jpg"},
#   {pet_name: "Charlie", pet_bio: "he's a raccoon", zipcode: 60093, start_date: "2018-11-11", end_date: "2018-12-11", petowner_image_file_name: nil, petowner_image_content_type: nil, petowner_image_file_size: nil, petowner_image_updated_at: nil, user_id: 1, imageURL: "https://s3.us-east-2.amazonaws.com/rails-pet-app/raccons-being-adorable-2.jpg"}
# ])
# Sitter.create!([
#   {zipcode: 55555, bio: "hi I'm oscar", sitter_image_file_name: nil, sitter_image_content_type: nil, sitter_image_file_size: nil, sitter_image_updated_at: nil, user_id: nil},
#   {zipcode: 60093, bio: "Hi I'm jared", sitter_image_file_name: nil, sitter_image_content_type: nil, sitter_image_file_size: nil, sitter_image_updated_at: nil, user_id: nil}
# ])
# Swipe.create!([
#   {petowner_id: 1, sitter_id: 1, swipe_by_sitter_value: "yes", swipe_by_petowner_value: "yes"},
#   {petowner_id: 1, sitter_id: 2, swipe_by_sitter_value: "yes", swipe_by_petowner_value: "yes"}
# ])
# Rating.create!([
#   {petowner_id: 1, sitter_id: 1, rating_by_petowner_value: 5, rating_by_sitter_value: 5},
#   {petowner_id: 2, sitter_id: 2, rating_by_petowner_value: nil, rating_by_sitter_value: nil},
#   {petowner_id: 2, sitter_id: 1, rating_by_petowner_value: 4, rating_by_sitter_value: 4}
# ])
