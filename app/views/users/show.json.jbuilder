json.id @user.id
json.name @user.name
json.email @user.email

if @petowner
  json.zipcode @petowner.zipcode
  json.petowner do
    json.pet_name @petowner.pet_name
    json.pet_bio @petowner.pet_bio
    json.start_date @petowner.start_date
    json.end_date @petowner.end_date
    json.score @petowner.score
    json.matches @petowner.matches
    json.petowner_image_large @petowner.petowner_image.url(:large)
  end
end

if @sitter
  json.zipcode @sitter.zipcode
  json.sitter do
    json.bio @sitter.bio
    json.score @sitter.score
    json.matches @sitter.matches
  end
end