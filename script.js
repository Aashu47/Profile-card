const modal = document.querySelector(".share-profile");
const overlay = document.querySelector(".overlay");

function openModal() {
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
}


function closeModal() {
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
}

function resume() {

    var cvUrl = 'https://drive.google.com/file/d/1JC0pnBYao6HqstIKbQLY9-ZxaRwNuFgx/view?usp=sharing';
  
    var anchorElement = document.createElement('a');
    anchorElement.href = cvUrl;
    anchorElement.download = 'Aayushi cv.pdf';
  
    anchorElement.click();
}