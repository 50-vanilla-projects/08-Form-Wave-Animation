// objects needed for event listeners
const form = document.querySelector("form");

// add animation to the text inputs the first time they are focused
form.addEventListener("focusin", (e) => {

    //only the email and password inputs
    if(e.target.type !== "submit") {

        // select the cooresponding label
        let labelInFocus = document.querySelector(`label[for="${e.target.id}"]`);

        // only run the animation once
        if(!labelInFocus.classList.contains('wave')) {

            // declare variables
            let spanString = ""; // the new inner html string
            let delay = 0;  // delay will be increased for each letter

            // make an array from the letters in the label
            let labelArray = Array.from(labelInFocus.innerText);

            // add span around each letter, so each letter can work independently
            labelArray.forEach(letter => {
                spanString += `<span style="transition-delay: ${delay}ms">${letter}</span>`;
                delay += 100;
            });

            // replace original label with the new span string
            labelInFocus.innerHTML = spanString;
            document.querySelectorAll("span").forEach(span => {
                span.classList.add("wave");
            });

        } // end animate on first focus
    }; // end if not submit input
}) // end focusin event handler