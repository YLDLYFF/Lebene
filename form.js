const firebaseConfig = {

  apiKey: "AIzaSyBOsWi9Ad1oqz6S_Cdd1ffdh-1qXWo-rjw",

  authDomain: "lebene-86214.firebaseapp.com",

  databaseURL: "https://lebene-86214-default-rtdb.firebaseio.com",

  projectId: "lebene-86214",

  storageBucket: "lebene-86214.appspot.com",

  messagingSenderId: "232881286688",

  appId: "1:232881286688:web:2ba146f04836983d3fd645"

};

// Initialising the database
firebase.initializeApp(firebaseConfig);


// Referencing the database
const contactFormDB = firebase.database().ref('Lebene')

//this function is set to get all the values from the input
const getElementVal = (id) => {
  return document.getElementById(id).value;
}
//adding eventListeners
document.getElementById("send").addEventListener('submit', function submitForm (e) {
  e.preventDefault();

  let name = getElementVal('name');
  let phone = getElementVal('phone');
  let email = getElementVal('emailId');
  let rezerve = getElementVal('rezerve');
  let reason = getElementVal('reason');
  let calendar = getElementVal('calendar');
  let time = getElementVal('time');
  let message = getElementVal('area');

  saveMessages(name, phone, email, rezerve, reason, calendar, time, message)
  console.log(
    `Here's your info: 
    ${ name },
   ${ phone },
    ${ email }, 
    ${ rezerve },
     ${ reason }, 
     ${ calendar }, 
     ${ time }, 
     ${ message }`)


  // enable alert
  document.querySelector(".alert").style.display = "block"
  // make the alert disappear again 
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 4000);

  // reset the form
  document.getElementById("send").reset()
});



//this function saves all or any input from the user
const saveMessages = (name, phone, email, rezerve, reason, calendar, time, message) => {
  let save = contactFormDB.push();

  save.set({
    name: name,
    phone: phone,
    email: email,
    rezerve: rezerve,
    reason: reason,
    calendar: calendar,
    time: time,
    message: message,
  })


}
