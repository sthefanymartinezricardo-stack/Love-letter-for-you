const envelope = document.querySelector(".envelope");
const letter = document.querySelector(".letter");

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "block";
});
