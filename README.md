# Main Frontend Libraries Used
"Material UI":
Library of styled components for creating attractive interfaces in React.

"Axios":
Library for making HTTP requests in the browser or Node.js server.

"Formik":
Library for handling forms in React in a simplified way.

"React":
Library for creating interactive and reactive user interfaces.

"Redux":
State management library for React applications.


# Main Gems Used in the Backend
Rails (Ruby on Rails): Framework for web development in Ruby.

Sidekiq: Library for background job processing in Rails applications.

ActionCable: Rails library for real-time functionality in web applications.

Roo: Ruby library for processing spreadsheets.





# Prerequisites Backend:
- Ruby [3.1.4]
- Ruby on Rails [6.1.7]
- Database (PostgreSQL)


# Configuration:
1. Clone this repository to your local system: 
   git clone git@github.com:FilipeBeserraMaia/umanni-admin-dashboard-sample-app.git

2. Navigate to the application directory:
   cd umanni-admin-dashboard-sample-app/backend

3. Install Ruby dependencies:
   bundle install

4. Configure the database:
   a. Edit the config/database.yml file to provide your database settings.
   b. Run the following commands to create the database, execute migrations, and run the rake tasks that create role records and an admin user:
     ```
      rails db:create
      rails db:migrate
      rake roles_task:create
      rake users_task:create
   ```

5. Start the server:
    ``` 
    rails s -p 3001 
    
    ```

6. Execute the sidekiq gem for asynchronous processes:
    ``` sidekiq  ```


# Prerequisites Frontend:
- Node [20.1.0]
- npm [9.6.4]


# Configuration after cloning the repository:
1. Navigate to the application directory:
   cd umanni-admin-dashboard-sample-app/dashboard_frontend

2. Run npm install:
    ``` npm install  ```

3. If you encounter any dependency issues, use:
    ``` npm install --force ```

4. Start the server:
    ``` npm start ```


# Once the frontend server is running, this should be your application view:

![image](https://github.com/FilipeBeserraMaia/umanni-admin-dashboard-sample-app/assets/60049042/51bdbfbc-a962-40e1-b966-8784e660db8f)
After logging in with a user:

![image](https://github.com/FilipeBeserraMaia/umanni-admin-dashboard-sample-app/assets/60049042/56af23e6-c64c-4cdd-abe0-75c38410c0ae)

After logging in with an admin:

![image](https://github.com/FilipeBeserraMaia/umanni-admin-dashboard-sample-app/assets/60049042/e4672176-fe9d-4f0c-b578-bef04352aab0)
To import new users:

![image](https://github.com/FilipeBeserraMaia/umanni-admin-dashboard-sample-app/assets/60049042/4ed19f23-0a78-43f8-afe8-506f0e28af00)
