Getting Started with Node.js
===========================

create package.json file
------------------------
npm init

install npm packages
---------------------
npm i --save express mongoose body-parser bcryptjs cors

Create MongoDB
--------------
// Navigate inside mongodb installation directory where 4.0 is your mongodb ver
cd C:\Program Files\MongoDB\Server\4.0\bin

// Run mongod.exe with folder directory where you need to save db data.
C:\Program Files\MongoDB\Server\4.0\bin>mongod.exe --dbpath D:\my-Tests\2019\MEANRegistration\Data

Open your MongoDB management tool � 
use MongoDB Compass Community to create a new Database

Generate a model class in angular
=================================
ng g class user --type=model

Install jsonwebtoken and passport
================================

npm i --save jsonwebtoken passport passport-local lodash