
//TO SEND VERIFICATION EMAIL
 user.sendEmailVerification().then(function() {
     // Email sent.
     alert('sent')
   }).catch(function(error) {
     // An error happened.
   });
///////////////////////////////////////////////////////////////

//TO SEND RESET PASSWORD EMAIL
var auth = fire.auth();
var emailAddress = "maqibmemon786@gmail.com";

auth.sendPasswordResetEmail(emailAddress).then(function() {
  // Email sent.
}).catch(function(error) {
  // An error happened.
});
//////////////////////////////////////////////////////////////

//TO SEND DELETE USER
var user = fire.auth().currentUser;

user.delete().then(function() {
  // User deleted.
}).catch(function(error) {
  // An error happened.
});
//////////////////////////////////////////////////////////////////