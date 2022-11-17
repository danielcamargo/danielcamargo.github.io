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
