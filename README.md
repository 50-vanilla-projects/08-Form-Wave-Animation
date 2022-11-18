# 08-Form-Wave-Animation
A sign in form with placeholder animation


This is the eighth project from the Udemy course designed by Florin Pop and taught by Brad Traversy 
entitled 50 Projects: HTML, CSS, and JavaScript.  I watched the video and then created what I saw
from scratch.

## Critical Rendering Path
In this project, I used a click into the input field to replace the original label, "Email" with a 
string with each of the letters surrounded by span elements. I then immediately made a transition 
on the span elements. The transition occured before the span string had been rendered and painted, 
so the transistion had no starting point. I needed to learn all about the critical rendering path 
to understand why my transition wasn't working.
