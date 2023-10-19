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
firebase.initializeApp( firebaseConfig );


// Referencing the database
const contactFormDB = firebase.database().ref( 'Lebene' )


document.getElementById( "send" ).addEventListener( 'submit', function submitForm ( e ) {
  e.preventDefault();

  let name = getElementVal( 'name' );
  let phone = getElementVal( 'phone' );
  let email = getElementVal( 'emailId' );
  let what = getElementVal( 'rezerve' );
  let state = getElementVal( 'single' );
  let cal = getElementVal( 'calendar' );
  let time = getElementVal( 'time' );
  let message = getElementVal( 'message' );

  console.log( name, phone, email, what, state, cal, time, message )
} );




const getElementVal = ( id ) => {
  return document.getElementById( id ).value;
}