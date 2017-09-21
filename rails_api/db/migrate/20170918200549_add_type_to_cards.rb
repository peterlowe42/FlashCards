class AddTypeToCards < ActiveRecord::Migration[5.1]
  def change
  	add_column :cards, :back_type, :string
  end
end
