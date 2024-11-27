var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname) {
   
    for (let tabLink of tablinks) {
        tabLink.classList.remove("active-link");
    }
    for (let tabContent of tabcontents) {
        tabContent.classList.remove("active-tab");
    }

    
    for (let tabLink of tablinks) {
        if (tabLink.innerText === tabname) {
            tabLink.classList.add("active-link");
        }
    }

   
    let activeTabContent = document.getElementById(tabname);
    activeTabContent.classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}
var message = document.getElementsByClassName(" btn2");
function message(){
   console.log("Button was click");
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbxpGHEfRqLCYfR_n9665mF-uhC5wDz6l8PZOnWXR-imcNzoZmy1o1VRaZTsgRebVH4Djw/exec';
const form = document.forms['submit-to-google-sheet'];
const feedbackMessage = document.querySelector('.feedback'); // Get the feedback message element

form.addEventListener('submit', e => {
    e.preventDefault();
    
    // Send form data
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            console.log('Success!', response);
            // Display the success message after submission
            feedbackMessage.style.display = 'block';
        })
        .catch(error => {
            console.error('Error!', error.message);
            // Optionally, display an error message here if the form submission fails
            feedbackMessage.style.display = 'block';
            feedbackMessage.textContent = "There was an error submitting the form. Please try again.";
        });
});

