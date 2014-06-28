class Goal < ActiveRecord::Base
  belongs_to :action_plan
  has_many :steps
end