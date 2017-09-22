class Card < ApplicationRecord
	has_attached_file :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  validates_inclusion_of :backType, in: ['Text', 'Image', 'Dsc']

  def image_url
  	image.url
  end
  
end
