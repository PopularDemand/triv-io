var admin = require("firebase-admin");

var serviceAccount = {
  // see config on desktop
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://triv-io.firebaseio.com"
});

module.exports = admin;