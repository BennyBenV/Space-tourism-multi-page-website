let type = document.getElementById("type");
let text = document.getElementById("text");
let img = document.getElementById("vehicle");
let nb = document.querySelectorAll(".nb");



nb.forEach((number) => {
    number.addEventListener("click", () => {
        if(number == nb[0]){
            type.innerHTML = "Launch Vehicle";
            text.innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it\'s quite an awe-inspiring sight on the launch pad!";
            img.src = "assets/technology/image-launch-vehicle-portrait.jpg";
            nb[1].style.backgroundColor = "transparent";
            nb[1].style.color = "white";
            nb[0].style.backgroundColor = "white";
            nb[0].style.color = "black";
            nb[2].style.backgroundColor = "transparent";
            nb[2].style.color = "white";
        }
        if(number == nb[1]){
            type.innerHTML = "Spaceport";
            text.innerHTML = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
            img.src = "assets/technology/image-spaceport-portrait.jpg";
            nb[0].style.backgroundColor = "transparent";
            nb[0].style.color = "white";
            nb[1].style.backgroundColor = "white";
            nb[1].style.color = "black";
            nb[2].style.backgroundColor = "transparent";
            nb[2].style.color = "white";
        }
        if(number == nb[2]){
            type.innerHTML = "Space Capsule";
            text.innerHTML = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
            img.src = "assets/technology/image-space-capsule-portrait.jpg";
            nb[0].style.backgroundColor = "transparent";
            nb[0].style.color = "white";
            nb[2].style.backgroundColor = "white";
            nb[2].style.color = "black";
            nb[1].style.backgroundColor = "transparent";
            nb[1].style.color = "white";
        }
        console.log(number);

    } )
})

