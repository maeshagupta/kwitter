
//ADD YOUR FIREBASE LINKS HERE

 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyBViu0BAQxe8dS84VLB7SyeRVyxEZ4iYTA",
      authDomain: "kwitter-c6809.firebaseapp.com",
      databaseURL: "https://kwitter-c6809-default-rtdb.firebaseio.com",
      projectId: "kwitter-c6809",
      storageBucket: "kwitter-c6809.appspot.com",
      messagingSenderId: "344325096750",
      appId: "1:344325096750:web:0100db58bd0e4658ace6bf",
      measurementId: "G-094LGJMTMD"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();                        

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       doceument.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{

  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
  console.loge(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
