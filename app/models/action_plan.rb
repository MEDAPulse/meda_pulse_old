class ActionPlan < ActiveRecord::Base
  belongs_to :client, dependent: :destroy
  has_many :goals, dependent: :destroy
end