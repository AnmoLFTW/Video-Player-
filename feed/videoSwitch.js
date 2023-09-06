// videoSwitch.js

document.addEventListener("DOMContentLoaded", function () {
    const cameraList = document.querySelector(".camera-list");
    const cameraFeed = document.getElementById("camera-feed");

    
    cameraList.addEventListener("click", function (e) {
        e.preventDefault();
        if (e.target.tagName === "A") {
            const videoSource = e.target.getAttribute("data-source");
            cameraFeed.src = videoSource;
            cameraFeed.load(); 
            cameraFeed.play(); 
        }
    });
});
