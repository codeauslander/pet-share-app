Petowner.create!([
  {pet_name: "bob", pet_bio: "he's a frog", zipcode: 60201, start_date: "2018-04-04", end_date: "2018-04-05", petowner_image_file_name: nil, petowner_image_content_type: nil, petowner_image_file_size: nil, petowner_image_updated_at: nil},
  {pet_name: "spot", pet_bio: "he's a dog", zipcode: 60202, start_date: "2018-07-07", end_date: "2018-07-08", petowner_image_file_name: nil, petowner_image_content_type: nil, petowner_image_file_size: nil, petowner_image_updated_at: nil},
  {pet_name: "Jen", pet_bio: nil, zipcode: nil, start_date: nil, end_date: nil, petowner_image_file_name: "20180404_173606.jpg", petowner_image_content_type: "image/jpeg", petowner_image_file_size: 2579137, petowner_image_updated_at: "2018-09-27 00:01:45"}
<<<<<<< HEAD
=======
])
Sitter.create!([
  {zipcode: 55555, bio: "hi I'm oscar", sitter_image_file_name: nil, sitter_image_content_type: nil, sitter_image_file_size: nil, sitter_image_updated_at: nil},
  {zipcode: 60093, bio: "Hi I'm jared", sitter_image_file_name: nil, sitter_image_content_type: nil, sitter_image_file_size: nil, sitter_image_updated_at: nil}
>>>>>>> 2f0c60dc87af4e6803222052848117da4d73f98a
])
Rating.create!([
  {petowner_id: 1, sitter_id: 1, rating_by_petowner_value: 5, rating_by_sitter_value: 5},
  {petowner_id: 2, sitter_id: 2, rating_by_petowner_value: nil, rating_by_sitter_value: nil},
  {petowner_id: 2, sitter_id: 1, rating_by_petowner_value: 4, rating_by_sitter_value: 4}
])
<<<<<<< HEAD
Sitter.create!([
  {zipcode: 55555, bio: "hi I'm oscar", sitter_image_file_name: nil, sitter_image_content_type: nil, sitter_image_file_size: nil, sitter_image_updated_at: nil},
  {zipcode: 60093, bio: "Hi I'm jared", sitter_image_file_name: nil, sitter_image_content_type: nil, sitter_image_file_size: nil, sitter_image_updated_at: nil}
])
Swipe.create!([
  {petowner_id: 1, sitter_id: 1, swipe_by_sitter_value: "yes", swipe_by_petowner_value: "yes"},
  {petowner_id: 1, sitter_id: 2, swipe_by_sitter_value: "yes", swipe_by_petowner_value: "yes"}
])
=======

Swipe.create!([
  {petowner_id: 1, sitter_id: 1, swipe_by_sitter_value: "yes", swipe_by_petowner_value: "yes"},
  {petowner_id: 1, sitter_id: 2, swipe_by_sitter_value: "yes", swipe_by_petowner_value: "yes"}
])
>>>>>>> 2f0c60dc87af4e6803222052848117da4d73f98a
