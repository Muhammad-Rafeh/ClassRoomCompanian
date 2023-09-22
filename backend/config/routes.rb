Rails.application.routes.draw do
  mount_devise_token_auth_for 'Student', at: 'auth'

  mount_devise_token_auth_for 'Teacher', at: 'teacher_auth'
  as :teacher do
    # Define routes for Teacher within this block.
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
