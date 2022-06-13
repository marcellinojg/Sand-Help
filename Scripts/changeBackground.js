//Function Ganti background sesuai jam
function changeBackground() {
    var now = new Date();
    hour = now.getHours();
    hour = 20
    // x = 1;
    if (hour >= 0 && hour <= 3) {
        document.querySelector('#player').setAttribute("src", "/Videos/background_beach_night.mp4");
    } else if (hour >= 4 && hour <= 7) {
        document.querySelector('#player').setAttribute("src", "/Videos/background_beach_dawn.mp4");
    }
    else if (hour >= 8 && hour <= 14) {
        document.querySelector('#player').setAttribute("src", "/Videos/background_beach_sunny.mp4");
    }
    else if (hour >= 15 && hour <= 17) {
        document.querySelector('#player').setAttribute("src", "/Videos/background_beach_dawn.mp4");
    }
    else if (hour >= 18 && hour <= 24) {
        document.querySelector('#player').setAttribute("src", "/Videos/background_beach_night.mp4");
    }
}