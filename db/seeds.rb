Client.destroy_all
ActionPlan.destroy_all
Goal.destroy_all
Step.destroy_all

def create_client
  client = Client.create(
                first_name: Faker::Name.first_name,
                last_name: Faker::Name.last_name,
                phone: Faker::PhoneNumber.phone_number,
                salesforce_id: Faker::Company.duns_number,
                email: Faker::Internet.email,
                user: User.last
                )
  create_action_plan(client)
end

def create_action_plan(client)
  action_plan = ActionPlan.create(
      description: Faker::Company.catch_phrase,
      client: client
    )
  create_goals(action_plan, rand(5)+1)
end

def create_goals(action_plan, number_to_create)
  number_to_create.times do
    goal = Goal.create(
        description: Faker::Company.catch_phrase,
        action_plan: action_plan
      )
    create_steps(goal, rand(5)+1)
  end
end

def create_steps(goal, number_to_create)
  number_to_create.times do
    step = Step.create(
        description: Faker::Company.bs,
        complete: [true, false].sample,
        due_by: Date.today+rand(365),
        goal: goal
      )
  end
end

10.times do
  create_client
end