class CreateSlogans < ActiveRecord::Migration[7.0]
  def change
    create_table :slogans do |t|
      t.text :first_name
      t.text :last_name
      t.text :email
      t.text :suggestion
      
      t.timestamps
    end
  end
end
