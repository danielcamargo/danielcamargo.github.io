function phoneNumber(inputEl){
    let value = inputEl.value;
    console.log(`Format number`, value);
    // Remove every non digit ("\D") in the value
    value = value.replace(/\D/g, "")
    // Place a "()" with the 3 first digits
    value = value.replace(/(\d{3})(.*)/gm, "($1) $2")
    // Place a "-" after the 6th digit
    value = value.replace(/(\(\d{3}\)\s)(\d{3})(.*)/gm, "$1$2-$3")
    // Force the max size
    value = value.replace(/(\(\d{3}\)\s)(\d{3}\-)(\d{1,4})(.*)/gm, "$1$2$3")
    // put the value back
    inputEl.value = value
}

function sendEmail(buttonEl){
    buttonEl.setAttribute("disabled", true);
    const icon = buttonEl.querySelector(".icon");
    const send = buttonEl.querySelector(".send");
    const sending = buttonEl.querySelector(".sending");
    icon.classList.remove("hidden");
    sending.classList.remove("hidden");
    send.classList.add("hidden");

    setTimeout(() => {
        buttonEl.removeAttribute("disabled");
        icon.classList.add("hidden");
        sending.classList.add("hidden");
        send.classList.remove("hidden");
    }, 3000);
}
