


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

