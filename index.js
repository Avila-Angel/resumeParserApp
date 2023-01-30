// Connect to firebase database 
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//const { initializeApp } = require('firebase/app');
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvs1f8HLWlpQPzIcqSy7HR18_c9wTC25I",
  authDomain: "resumeparserapp.firebaseapp.com",
  projectId: "resumeparserapp",
  storageBucket: "resumeparserapp.appspot.com",
  messagingSenderId: "1008256925353",
  appId: "1:1008256925353:web:b827eba762aaceb4bcb3b8"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

// import firebase functions
// getDatabase - gets database
// set - inserts data into database
// get - gets data from database
// update - updates data into database
// remove - removes data in database
// ref - gets specific reference in database or put specific data in with a specific reference
// child - allows to go within folders or retreive data within parent items 


/*import {getDatabase, set, get, update, remove, ref, child}
from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js"

const db = getDatabase; // gets database*/


//selecting all required elements
const dropArea = document.querySelector(".drag-area"),
dragText = dropArea.querySelector("header"),
browseBtn = dropArea.querySelector("#browseButton"),
input = dropArea.querySelector("input");
let file; //this is a global variable and we'll use it inside multiple functions

browseBtn.onclick = ()=>{
  input.click(); //if user click on the button then the input also clicked
  
}

input.addEventListener("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = this.files[0];
  dropArea.classList.add("active");
  showFile(); //calling function
});


//If user Drag File Over DropArea
dropArea.addEventListener("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea.classList.add("active");
  dragText.textContent = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea.addEventListener("dragleave", ()=>{
  dropArea.classList.remove("active");
  dragText.textContent = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea.addEventListener("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = event.dataTransfer.files[0];
  showFile(); //calling function
});

function showFile() {
    let fileType = file.type; //getting selected file type
    let validExtensions = ["application/pdf"]; //adding valid pdf extensions in array
    if(validExtensions.includes(fileType)){ //if user selected file is an pdf file
      let fileReader = new FileReader(); //creating new FileReader object
      fileReader.onload = ()=>{
        let fileURL = fileReader.result; //passing user file source in fileURL variable
        
        let fileTag = `<object data="${fileURL}" alt="file" height="500px" width="700px" >New uploaded file</object>`; //creating an object tag and passing user selected file source inside data attribute
        dropArea.innerHTML = fileTag; //adding that created object tag inside dropArea container
      }
      fileReader.readAsDataURL(file);
    }else{
      alert("This is not an pdf File! Please submit a pdf file only.");
      dropArea.classList.remove("active");
      dragText.textContent = "Drag & Drop to Upload File";
    }
  }

function sendToDatabase() { // use firebase functions here 
    console.log("here")
}

const uploadBtn = document.querySelector(".upload-btn")

uploadBtn.addEventListener("click", sendToDatabase)