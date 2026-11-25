/* ==========================================
   PAGE 1
========================================== */

const openButton = document.getElementById("openButton");
const clickSound = document.getElementById("clickSound");
const backgroundMusic = document.getElementById("backgroundMusic");


if (openButton) {

    openButton.addEventListener("click", function () {

        /* CLICK SOUND */

        if (clickSound) {

            clickSound.currentTime = 0;
            clickSound.volume = 1;

            clickSound.play().catch(function () {});

        }


        /* MUSIC */

        if (backgroundMusic) {

            backgroundMusic.volume = 0.35;

            backgroundMusic.play().catch(function () {});

        }


        /* BUTTON */

        openButton.textContent = "♡ OPENING... ♡";

        openButton.disabled = true;


        /* PAGE 2 */

        setTimeout(function () {

            window.location.href = "page2.html";

        }, 500);

    });

}



/* ==========================================
   PAGE 2
========================================== */

const page2Music =
    document.getElementById("backgroundMusic");


if (page2Music) {

    page2Music.volume = 0.35;

    page2Music.play().catch(function () {});

}



/* ==========================================
   BACK BUTTON
========================================== */

const backButton =
    document.getElementById("backButton");


if (backButton) {

    backButton.addEventListener("click", function () {

        if (clickSound) {

            clickSound.currentTime = 0;
            clickSound.volume = 1;

            clickSound.play().catch(function () {});

        }

    });

}

/* ==========================================
   CUSTOM CURSOR + SPARKLE TRAIL
========================================== */

const customCursor =
    document.querySelector(".custom-cursor");


if (customCursor) {

    let sparkleTimer = 0;

    document.addEventListener("mousemove", function (event) {

        customCursor.style.left =
            event.clientX + "px";

        customCursor.style.top =
            event.clientY + "px";


        /* sparkle trail */

        sparkleTimer++;

        if (sparkleTimer % 3 === 0) {

            const sparkle =
                document.createElement("span");

            sparkle.className =
                "cursor-sparkle";

            sparkle.textContent = "✦";

            sparkle.style.left =
                event.clientX + "px";

            sparkle.style.top =
                event.clientY + "px";

            document.body.appendChild(sparkle);


            setTimeout(function () {

                sparkle.remove();

            }, 700);

        }

    });

}