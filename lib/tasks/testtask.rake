require 'pry'
namespace :testtask do
	desc "This is for description"
  task :task, [:username]  => :environment  do |task, args|
  	@usernames = args.username #.split(';')
  	binding.pry
    # users = User.where({ name: usernames})
		sql = "Select name,email from users where name = @usernames;"
    users = ActiveRecord::Base.connection.exec_query('Select * from users')
    puts "name     |     email"
    # users.each{ |u| puts u.name + " | " + u.email}
    users.each do |u|

		puts u.name + " | " + u.email
	end
end


  task hello: :environment do
  	puts "Hello!!!!!!!"
  end
   task ask: :hello do
   		puts "Nice to meet you!"
   end
end
