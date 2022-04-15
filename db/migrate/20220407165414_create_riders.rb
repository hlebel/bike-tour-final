class CreateRiders < ActiveRecord::Migration[7.0]
  def change
    create_table :riders do |t|
      t.text :first_name
      t.text :last_name
      t.text :city_of_origin
      t.text :state_of_origin
      t.text :location

      t.timestamps
    end
  end
end
