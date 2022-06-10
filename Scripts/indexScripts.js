 //Navbar Function
 function openNav() {
    document.getElementById("openBtn").style.visibility = "hidden";


    document.getElementById("mySidebar").style.width = "30%";
    document.getElementById("main").style.marginLeft = "30%";
    if (window.innerWidth <= 600) {
        document.getElementById("mySidebar").style.width = "100%";
        document.getElementById("main").style.marginLeft = "100%";
    }
}

function closeNav() {
    document.getElementById("openBtn").style.visibility = "visible";
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
//Navbar Function End


