
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  // Reference Users Collection
  var usersRef = firebase.database().ref('Users');
  
  document.getElementById('newUser').addEventListener('submit', submitForm);


  // Submit Form
  function submitForm(e){
    e.preventDefault();
    // Get all values
    var fullname = getInputVal('fullname');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var optedin = getInputVal('optedin');
    var ip = getInputVal('ip');
    var date = getInputVal('date');

    // Saves user
    saveUser(fullname, email, phone, optedin, ip, date);

    // Show Alert
    document.querySelector('.alert').style.display = 'block';

    // hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
    
  }

  // Function to get form values

function getInputVal(id){
    return document.getElementById(id).value;
}

// Function save the user to users
function saveUser(fullname, email, phone, optedin, ip, timestamp){
    var newUsersRef = usersRef.push();
    newUsersRef.set({
        fullname:fullname,
        email:email,
        phone:phone,
        optedin:optedin,
        ip:ip,
        timestamp:timestamp
    });
}

