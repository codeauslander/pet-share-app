Petowner.create!([
  {name: "john", email: "jim@jim.org", password: "password", pet_name: "bob", pet_bio: "he's a frog", zipcode: 60201, start_date: "2018-04-04", end_date: "2018-04-05", petowner_image_file_name: nil, petowner_image_content_type: nil, petowner_image_file_size: nil, petowner_image_updated_at: nil},
  {name: "steve", email: "steve@steve.net", password: "password", pet_name: "spot", pet_bio: "he's a dog", zipcode: 60202, start_date: "2018-07-07", end_date: "2018-07-08", petowner_image_file_name: nil, petowner_image_content_type: nil, petowner_image_file_size: nil, petowner_image_updated_at: nil}
])
Rating.create!([
  {petowner_id: 1, sitter_id: 1, rating_by_petowner_value: 5, rating_by_sitter_value: 5},
  {petowner_id: 2, sitter_id: 2, rating_by_petowner_value: nil, rating_by_sitter_value: nil},
  {petowner_id: 2, sitter_id: 1, rating_by_petowner_value: 4, rating_by_sitter_value: 4}
])
Sitter.create!([
  {name: "Oscar", email: "oscar@oscar.gov", password: "password", zipcode: 55555, bio: "hi I'm oscar", sitter_image_file_name: nil, sitter_image_content_type: nil, sitter_image_file_size: nil, sitter_image_updated_at: nil},
  {name: "Jared", email: "jared@jared.org", password: "password", zipcode: 60093, bio: "Hi I'm jared", sitter_image_file_name: nil, sitter_image_content_type: nil, sitter_image_file_size: nil, sitter_image_updated_at: nil}
])
