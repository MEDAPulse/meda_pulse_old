class Client < ActiveRecord::Base
  belongs_to :user
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :phone, presence: true
  validates :salesforce_id, presence: true
end