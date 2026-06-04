function changeService(title, text, image, element) {

    document.getElementById("serviceTitle").innerText = title;

    document.getElementById("serviceText").innerText = text;

    document.getElementById("serviceImage").src = image;

    let items = document.querySelectorAll(".service-item");

    items.forEach(item => {
        item.classList.remove("active");
    });

    element.classList.add("active");
}


const track = document.getElementById("scrollTrack");

setInterval(() => {
    const firstItem = track.firstElementChild;

    track.style.transition = "transform 0.5s linear";
    track.style.transform = "translateX(-120px)";

    setTimeout(() => {
        track.appendChild(firstItem);
        track.style.transition = "none";
        track.style.transform = "translateX(0)";
    }, 500);

}, 2000);