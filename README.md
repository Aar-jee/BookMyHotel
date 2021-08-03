# BookMyHotel


---------------------------------------------------------------------------------------------------------
# Steps to run the App (from client folder):

1. Open client folder and run  		:       npm install
2. Install json-server(globally)	:	npm install -g json-server
3. Run json-server (can be run in cmd/terminal) 	:       json-server --port 8001 --watch .\hotels.json
4. Run the app locally			:	npm start and goto http://localhost:3000/ to see the app 
5. Use Create Account option to create an account or,
6. To use login feature for an existing user	:
	a). Either use any user from hotels.json data (it has username and password list) or,
	b). Enter username as "rohit@gmail.com" and password as "rohit"
7. For stripe payment use these card details:  
		Card: 4242424242424242
		Date: Any future date
		CVV: Any three digit number
	A list of other cards can be found here :  https://stripe.com/docs/testing
  
  
-------------------------------------------------------------------------------------------------------

Steps to create fake data using Faker and to run json server on port 8001

1. Make sure you have node js and npm installed

2. Run npm i -g json-server

3. Run npm install (for faker and other pkgs)

4. Run json-server --port 8001 ./hotelsData.js 
