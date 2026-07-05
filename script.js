const envelope = document.getElementById("envelope");
const nextBtn = document.getElementById("nextBtn");
const final = document.getElementById("final");
const container = document.querySelector(".container");

let opened = false;

// Open the envelope
envelope.addEventListener("click", () => {
    if (opened) return;

    opened = true;
    document.body.classList.add("open");
});

// Go to final message
nextBtn.addEventListener("click", () => {
    container.style.display = "none";
    final.style.display = "flex";
});
