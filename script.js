function upDate(previewPic) {
    console.log("Event triggered!"); // Debugging
    console.log("Image Source:", previewPic.src); // Debugging
    console.log("Alt Text:", previewPic.alt); // Debugging

    let imgDiv = document.getElementById("image");

    if (imgDiv) {
        imgDiv.style.backgroundImage = `url('${previewPic.src}')`;
        imgDiv.textContent = previewPic.alt;
    } else {
        console.error("Element with ID 'image' not found.");
    }
}

function undo() {
    let imgDiv = document.getElementById("image");

    if (imgDiv) {
        imgDiv.style.backgroundImage = "url('')";
        imgDiv.textContent = "Hover over an image below to display here.";
    } else {
        console.error("Element with ID 'image' not found.");
    }
}
