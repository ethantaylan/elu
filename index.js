function showHide() {
    let boite = document.getElementById ("boite")
    let btn = document.getElementById ("btn")
    if (boite.style.height === "0px") {
    boite.style.height = "300px"
    boite.style.visibility ="visible"
    boite.style.opacity ="1"
    boite.style.transition = "opacity 0.3s"
    }
    else {
    boite.style.height ="0px"
    boite.style.visibility = "hidden"
    boite.style.opacity ="0"
    boite.style.transition = "opacity 0.3s, height 1s"
    }
    }