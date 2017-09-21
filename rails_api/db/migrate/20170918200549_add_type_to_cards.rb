class AddTypeToCards < ActiveRecord::Migration[5.1]
  def change
  	add_column :cards, :backType, :string
  end
end
