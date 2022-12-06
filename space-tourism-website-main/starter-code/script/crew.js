let grad = document.getElementById("grad");
let name = document.getElementById("name");
let bio = document.getElementById("bio")
let img = document.getElementById("image");
let nb = document.querySelectorAll(".others");



nb.forEach((number) => {
    number.addEventListener("click", () => {
        if(number == nb[0]){
            grad.innerHTML = "Commander";
            name.innerHTML = "Douglas Hurley"
            bio.innerHTML = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
            img.src = "assets/crew/image-douglas-hurley.png";
            img.style.float = "right";
            img.style.position = "relative";
            img.style.top = "-240px";
            img.style.right = "75px";

            nb[1].style.backgroundColor = "#979797";
            nb[1].style.opacity = "17.44%";

            nb[0].style.backgroundColor = "white";
            nb[0].style.opacity = "unset";

            nb[2].style.backgroundColor = "#979797";
            nb[2].style.opacity = "17.44%";

            nb[3].style.backgroundColor = "#979797";
            nb[3].style.opacity = "17.44%";

        }
        if(number == nb[1]){
            grad.innerHTML = "Mission Specialist";
            name.innerHTML = "Mark Shuttleworth"
            bio.innerHTML = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
            img.src = "assets/crew/image-mark-shuttleworth.png";
            img.style.float = "right";
            img.style.position = "relative";
            img.style.top = "-180px";
            img.style.right = "130px";

            nb[0].style.backgroundColor = "#979797";
            nb[0].style.opacity = "17.44%";
            nb[1].style.backgroundColor = "white";
            nb[1].style.opacity = "unset";
            nb[2].style.backgroundColor = "#979797";
            nb[2].style.opacity = "17.44%";

            nb[3].style.backgroundColor = "#979797";
            nb[3].style.opacity = "17.44%";


        }
        if(number == nb[2]){
            grad.innerHTML = "Pilot";
            name.innerHTML = "Victor Glover"
            bio.innerHTML = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";
            img.src = "assets/crew/image-victor-glover.png";
            img.style.float = "right";
            img.style.position = "relative";
            img.style.top = "-187px";
            img.style.right = "150px";

            nb[0].style.backgroundColor = "#979797";
            nb[0].style.opacity = "17.44%";

            nb[2].style.backgroundColor = "white";
            nb[2].style.opacity = "unset";

            nb[1].style.backgroundColor = "#979797";
            nb[1].style.opacity = "17.44%";

            nb[3].style.backgroundColor = "#979797";
            nb[3].style.opacity = "17.44%";

        }
        if(number == nb[3]){
            grad.innerHTML = "Flight Engineer";
            name.innerHTML = "Anousheh Ansari"
            bio.innerHTML = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
            img.src = "assets/crew/image-anousheh-ansari.png";
            img.style.float = "right";
            img.style.position = "relative";
            img.style.top = "-145px";
            img.style.right = "100px";

            nb[0].style.backgroundColor = "#979797";
            nb[0].style.opacity = "17.44%";

            nb[3].style.backgroundColor = "white";
            nb[3].style.opacity = "unset";

            nb[2].style.backgroundColor = "#979797";
            nb[2].style.opacity = "17.44%";

            nb[1].style.backgroundColor = "#979797";
            nb[1].style.opacity = "17.44%";

        }
        console.log(number);

    } )
})

