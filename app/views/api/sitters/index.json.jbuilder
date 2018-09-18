json.sitters do
  json.array! @sitters, partial: "api/sitters/sitter", as: :sitter
end