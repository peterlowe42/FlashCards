class CardsController < ApplicationController
  respond_to :json

	def index
		@cards = Card.all.to_json(methods: :image_url).html_safe
		respond_with @cards
	end
end
