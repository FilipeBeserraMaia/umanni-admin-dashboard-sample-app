Prerequisites Backend:
- Ruby [3.1.4]
- Ruby on Rails [6.1.7]
- Database (PostgreSQL)


Configuration:
1. Clone this repository to your local system: 
   git clone git@github.com:FilipeBeserraMaia/umanni-admin-dashboard-sample-app.git

2. Navigate to the application directory:
   cd umanni-admin-dashboard-sample-app/backend

3. Install Ruby dependencies:
   bundle install

4. Configure the database:
   a. Edit the config/database.yml file to provide your database settings.
   b. Run the following commands to create the database, execute migrations, and run the rake tasks that create role records and an admin user:
      rails db:create
      rails db:migrate
      rake roles_task:create
      rake users_task:create

5. Start the server:
   rails s -p 3001

6. Execute the sidekiq gem for asynchronous processes:
   sidekiq


Prerequisites Frontend:
- Node [20.1.0]
- npm [9.6.4]


Configuration after cloning the repository:
1. Navigate to the application directory:
   cd umanni-admin-dashboard-sample-app/dashboard_frontend

2. Run npm install:
   npm install

3. If you encounter any dependency issues, use:
   npm install --force

4. Start the server:
   npm start


Once the frontend server is running, this should be your application view:

![image](https://github.com/FilipeBeserraMaia/umanni-admin-dashboard-sample-app/assets/60049042/e50ae0bf-5a76-4e4a-baa3-5390710647cf)

After logging in with a user:

![image](https://github.com/FilipeBeserraMaia/umanni-admin-dashboard-sample-app/assets/60049042/ef041961-c8a7-4e2a-948f-3a33a78d9e74)

After logging in with an admin:

![image](https://github.com/FilipeBeserraMaia/umanni-admin-dashboard-sample-app/assets/60049042/5c9d64a7-a9cb-4455-8487-3f033e4f3b10)

To import new users:

![image](https://github.com/FilipeBeserraMaia/umanni-admin-dashboard-sample-app/assets/60049042/f6c88e66-7095-4917-9119-06ad5ad27da5)
