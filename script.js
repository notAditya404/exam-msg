const envelope = document.getElementById("envelope");
const next = document.getElementById("next");
const final = document.querySelector(".final");
const container = document.querySelector(".container");

let opened = false;

envelope.addEventListener("click", () => {
    if (opened) return;

    opened = true;
    document.body.classList.add("open");
});

next.addEventListener("click", () => {
    container.style.display = "none";
    final.style.display = "flex";
});
