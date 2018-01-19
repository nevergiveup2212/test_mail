require 'pry'
namespace :testtask do
	desc "This is for description"
  task :task, [:username]  => :environment  do |task, args|
  	@usernames = args.username.split(';')
  	
    # users = User.where({ name: usernames})
    sql = "Select name,email from users"
    binding.pry
    sql1 = "Select name,email from users where name in (?)"
    q = User.send(:sanitize_sql, [sql1, @usernames])
    users = ActiveRecord::Base.connection.exec_query(q)
    
    puts "name     |     email"
    # users.each{ |u| puts u.name + " | " + u.email}
    users.each do |u|
		puts u
	end
end
  

  task hello: :environment do 
  	puts "Hello!!!!!!!"
  end
   task ask: :hello do
   		puts "Nice to meet you!"
   end
end

