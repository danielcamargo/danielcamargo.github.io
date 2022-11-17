
function onFileChange(inputEl){
    const files = inputEl.files;
    const selectedFilesContainer = document.getElementById("selectedFilesContainer");
    window.files = inputEl.files;
    for (let i = 0; i < files.length; i++){
        const file = files[i];
        console.log("File: ", file);
        const image = document.createElement('img');
        image.classList.add("w-24")
        image.src = URL.createObjectURL(file);
        selectedFilesContainer.appendChild(image);
    }
}

function dragOverHandler(ev) {
    ev.preventDefault();
}

function dropHandler(evt){
    console.log("Drop handler called");
    evt.preventDefault();
    window.evt = evt;
    const items = evt.dataTransfer.items;
    for (let i = 0; i < items.length; i++){
        const item = items[i];
        const file = item.getAsFile();
        const image = document.createElement('img');
        image.classList.add("w-24")
        image.src = URL.createObjectURL(file);
        selectedFilesContainer.appendChild(image);
    }
}

window.addEventListener('paste', (evt) => {
    console.log('paste action initiated');
    window.buffer = evt;
    const files = evt.clipboardData.files;
    for (let i = 0; i < files.length; i++){
        const file = files[i];
        console.log("File: ", file);
        const image = document.createElement('img');
        image.classList.add("w-24")
        image.src = URL.createObjectURL(file);
        selectedFilesContainer.appendChild(image);
    }
});
