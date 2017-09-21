class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.string :front_text
      t.text :back_text

      t.timestamps
    end
  end
end
