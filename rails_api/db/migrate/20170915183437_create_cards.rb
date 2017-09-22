class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.string :frontText
      t.text :backText

      t.timestamps
    end
  end
end
