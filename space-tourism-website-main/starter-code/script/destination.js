let title = document.getElementById("title");
let see = document.getElementById("see");
let dist = document.getElementById("dist")
let img = document.getElementById("image");
let time = document.getElementById("time");
let nb = document.querySelectorAll(".li_planet");



nb.forEach((number) => {
    number.addEventListener("click", () => {
        if(number == nb[0]){
            title.innerHTML = "Moon";
            see.innerHTML = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
            dist.innerHTML = "384,400 KM";
            time.innerHTML = "3 DAYS"
            img.src = "assets/destination/image-moon.png";

        }
        if(number == nb[1]){
            title.innerHTML = "Mars";
            see.innerHTML = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
            dist.innerHTML = "225 mil. km";
            time.innerHTML = "9 months"
            img.src = "assets/destination/image-mars.png";
            

        }
        if(number == nb[2]){
            title.innerHTML = "Europa";
            see.innerHTML = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
            dist.innerHTML = "628 mil. km";
            time.innerHTML = "3 years"
            img.src = "assets/destination/image-europa.png";

        }
        if(number == nb[3]){
            title.innerHTML = "Titan";
            see.innerHTML = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
            dist.innerHTML = "1.6 bil. km";
            time.innerHTML = "7 years"
            img.src = "assets/destination/image-titan.png";

        }
        console.log(number);

    } )
})



