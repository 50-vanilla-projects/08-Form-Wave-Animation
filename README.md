# 08-Form-Wave-Animation
A sign in form with placeholder animation


This is the eighth project from the Udemy course designed by Florin Pop and taught by Brad Traversy 
entitled 50 Projects: HTML, CSS, and JavaScript.  I watched the video and then created what I saw
from scratch.

It is a simple login form with fields for email and password, but when the input of each field
is focused, the placeholder text moves up above the field letter by letter to be seen while the
user is inputting their information.

The html label is broken into an with each letter put into a span element in order to produce animation
for each individual letter.  During the creation of the span element, each letter gets the class "letter"
added that has a transition delay of 100 ms later than the previous letter.

The next step is adding the class "wave" to each letter that holds the actual transform function.  I
learned about the critical rendering class because, the animation was not working as expected.  The "wave"
class was being added to each letter before the new render tree with the new DOM and CSSOM was repainted.
In order to give a slight delay, I learned to add the command to add "wave" inside of a requestAnimationFrame
function.  Calling that function twice, gave enough time for the new render tree to calculate the
original position of the placeholder letters before moving them up.
