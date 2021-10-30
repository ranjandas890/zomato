// javascript for modal login form 


const show=()=>{
    document.getElementById('id').style.display="block";
    alert('hello');
}

const close=()=>{
    document.getElementById('id').style.display="none";
}


const shut=()=>{
    document.getElementById('id').style.display="none";
}



// get the modal login form 

const modal=document.querySelector('#id');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



// sign up event 


const signup=()=>{
    document.getElementsByClassName('id2').style.display="block";
    alert('fuck');
    // alert('hello');
}




// Get the modal
var modal2 = document.getElementById('id2');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal.style.display = "none";
  }
}
