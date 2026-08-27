const screens = [1, 2, 3].reduce(
    (o, n) => {
        o[n] = document.getElementById("screen" + n);
        return o;
    },
    {}
);


/* =========================
   PAGE NAVIGATION
   ========================= */

function show(n) {

    Object.values(screens).forEach(
        s => s.classList.remove("active")
    );

    screens[n].classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    /* Start final-page message and music */

    if (n === 3) {

        typeMessage();

        setTimeout(() => {

            const audio =
                document.getElementById("song");

            audio.play().catch(() => {
                /*
                Browser may block autoplay.
                User can press Play manually.
                */
            });

        }, 350);
    }
}


/* =========================
   YES BUTTON
   ========================= */

const yes =
    document.getElementById("yesBtn");


const no =
    document.getElementById("noBtn");


const hint =
    document.getElementById("noMessage");


yes.onclick = () => {

    show(2);

};


/* =========================
   NO BUTTON RUNS AWAY
   ========================= */

function escapeNo() {

    no.style.position = "fixed";


    const x =
        Math.max(
            8,
            Math.random() *
            (
                innerWidth -
                no.offsetWidth -
                16
            )
        );


    const y =
        Math.max(
            8,
            Math.random() *
            (
                innerHeight -
                no.offsetHeight -
                16
            )
        );


    no.style.left = x + "px";

    no.style.top = y + "px";


    hint.textContent = [

        "Hmm… NO is unavailable today. 😂",

        "Nice try! The NO button has left the chat. 😌",

        "Wrong answer, Bhagini. 😏💕",

        "The universe says YES. ✨"

    ][
        Math.floor(
            Math.random() * 4
        )
    ];
}


no.addEventListener(
    "mouseenter",
    escapeNo
);


no.addEventListener(
    "touchstart",
    e => {

        e.preventDefault();

        escapeNo();

    }
);


no.addEventListener(
    "click",
    e => {

        e.preventDefault();

        escapeNo();

    }
);


/* =========================
   PAGE 2 → PAGE 3
   ========================= */

document
    .getElementById("revealBtn")
    .onclick = () => show(3);


/* =========================
   RESTART
   ========================= */

document
    .getElementById("restartBtn")
    .onclick = () => {

        document
            .getElementById("song")
            .pause();

        show(1);

    };


/* =========================
   FINAL MESSAGE
   ========================= */

const text =
    "I love you, my Adarniya, Pujniya, Respected Bhagini. ❤️";


let timer;


function typeMessage() {

    clearInterval(timer);


    const el =
        document.getElementById("message");


    el.textContent = "";


    let i = 0;


    timer = setInterval(() => {

        el.textContent =
            text.slice(0, ++i);


        if (i >= text.length) {

            clearInterval(timer);

        }

    }, 38);

}
