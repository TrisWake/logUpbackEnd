// These variables are our "database" for users.
// You can actually change the values to whatever you'd like!
// And you can and should use them in your `isRegisteredUser` function.
// But we use them in your test code as well, so whatever you do, don't delete them!

const user1 = 'krose@perseverenow.org';
const password1 = 'Hotforhimself';
const user2 = 'jdoty@perseverenow.org';
const password2 = 'Console.logger';
const user3 = 'dhiggins.prsvr@gmail.com';
const password3 = "supToThis"


// **YOUR** code below. Pass those tests!
function isValidEmail(email){
  const domain1 = ".prsvr@gmail.com";
  const domain2 = "@perseverenow.org";
  return email.length > domain1.length && email.endsWith(domain1) || email.length > domain2.length && email.endsWith(domain2)
}

function isValidPassword(password){
  return (password.length >= 8 && password.toLowerCase() !== password &&  
    password.toUpperCase() !== password 
  )
}

function isRegisteredUser(user){
  return( user === user1 || user === user2 || user === user3)
}

function passwordMatches(user, password){
  return (user === user1 && password === password1) || (user === user2 && password === password2) || (user === user3 && password === password3)
}
// Our code below. Do not touch!


if (typeof isValidEmail === 'undefined') {
  isValidEmail = undefined;
}

if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}

if (typeof isRegisteredUser === 'undefined') {
  isRegisteredUser = undefined;
}

if (typeof passwordMatches === 'undefined') {
  passwordMatches = undefined;
}

if (typeof user1 === 'undefined') {
  user1 = undefined;
}

if (typeof user2 === 'undefined') {
  user2 = undefined;
}

if (typeof user3 === 'undefined') {
  user3 = undefined;
}

if (typeof password1 === 'undefined') {
  password1 = undefined;
}

if (typeof password2 === 'undefined') {
  password2 = undefined;
}

if (typeof password3 === 'undefined') {
  password3 = undefined;
}



module.exports = {
  isValidEmail,
  isValidPassword,
  isRegisteredUser,
  passwordMatches,
  user1,
  user2,
  user3,
  password1,
  password2,
  password3
}
