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
                spanString += `<span class="letter" style="transition-delay: ${delay}ms">${letter}</span>`;
                delay += 100;
            });

            // replace original label with the new span string
            labelInFocus.innerHTML = spanString;  
            // We need this to render, before giving it a new class.  Rendering actually takes a little bit of time.
            // adding the class "wave" may happen before the span is even finished being painted?
            // "But you can't transition anything, if the display is changed at the same time."
            //  - quoted from https://stackoverflow.com/questions/54344996/css-transition-doesnt-work-if-element-start-hidden/
            
            
            // requestAnimationFrame() takes enough time that the new wave class will not be added before the span
            // finishes rendering.  We need the original position calculated before we do a transform.
            requestAnimationFrame(()=> requestAnimationFrame(() => document.querySelectorAll("span")
                .forEach(span => {
                    console.log(span.classList);
                    if (span.classList.contains("letter")) {
                        span.classList.add("wave");
                    }
                }
            )));

        } // end animate on first focus
    }; // end if not submit input
}) // end focusin event handler