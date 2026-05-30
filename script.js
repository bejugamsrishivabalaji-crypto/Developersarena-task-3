// LOADER

window.addEventListener("load",()=>{

    document.querySelector(".loader")
    .style.display = "none";

});

/* CONTACT FORM */

document.getElementById("contactForm")
.addEventListener("submit",(e)=>{

    e.preventDefault();

    const name =
    document.getElementById("name").value;

    const email =
    document.getElementById("email").value;

    const message =
    document.getElementById("message").value;

    const formMessage =
    document.getElementById("formMessage");

    if(name === "" ||
       email === "" ||
       message === ""){

        formMessage.innerHTML =
        "Please fill all fields";

        formMessage.style.color =
        "red";

    }

    else{

        formMessage.innerHTML =
        "Message Sent Successfully";

        formMessage.style.color =
        "#00ffae";

    }

});

/* ANIMATED SKILL BARS */

window.addEventListener("load",()=>{

    setTimeout(()=>{

        document.querySelector(".html-progress")
        .style.width = "75%";

        document.querySelector(".css-progress")
        .style.width = "70%";

        document.querySelector(".js-progress")
        .style.width = "60%";

        document.querySelector(".ui-progress")
        .style.width = "50%";

    },800);

});

/* PARTICLES */

const particles =
document.querySelector(".particles");

for(let i = 0; i < 180; i++){

    const particle =
    document.createElement("span");

    particle.style.position =
    "absolute";

    const size =
    Math.random()*5 + 2;

    particle.style.width =
    size + "px";

    particle.style.height =
    size + "px";

    particle.style.background =
    "rgba(0,255,174,0.7)";

    particle.style.borderRadius =
    "50%";

    particle.style.boxShadow =
    "0 0 10px #00ffae";

    particle.style.left =
    Math.random()*100 + "%";

    particle.style.top =
    Math.random()*100 + "%";

    particle.style.animation =
    `moveParticles ${Math.random()*10+10}s linear infinite`;

    particles.appendChild(particle);

}

/* PARTICLE ANIMATION */

const style =
document.createElement("style");

style.innerHTML = `

@keyframes moveParticles{

    0%{
        transform:
        translateY(0px)
        translateX(0px)
        scale(0.5);

        opacity:0;
    }

    20%{
        opacity:1;
    }

    50%{
        transform:
        translateY(-120px)
        translateX(50px)
        scale(1);
    }

    100%{
        transform:
        translateY(-250px)
        translateX(-50px)
        scale(0.3);

        opacity:0;
    }

}

`;

document.head.appendChild(style);