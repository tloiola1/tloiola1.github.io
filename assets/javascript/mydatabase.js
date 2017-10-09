
    var name = "";
    var phone = "";
    var company ="";
    var message = "";

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBXPy5nxXC8Bn7IS-7vxmUYZftCyMIdMqo",
      authDomain: "my-portfolio-25a3a.firebaseapp.com",
      databaseURL: "https://my-portfolio-25a3a.firebaseio.com",
      projectId: "my-portfolio-25a3a",
      storageBucket: "",
      messagingSenderId: "150932242860"
    };
    firebase.initializeApp(config);

    // Create a variable to reference the database.
    var my_database = firebase.database();


    // Capture Button Click
    $("#submit").on("click", function(event) {

        store();

      function store(){
      event.preventDefault();

      // Grabbed values from text boxes
      name = $("#name").val().trim();
      phone = $("#phone").val().trim();
      company = $("#company").val().trim();
      message = $("#message").val().trim();

      // Code for handling the push
      my_database.ref().push({
        name: name,
        phone: phone,
        company: company,
        message: message,
        //
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });
      }
    });

    function display(){  

    my_database.ref().on("child_added", function(childSnapshot) {
                      
      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });
  }

