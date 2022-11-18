# 08-Form-Wave-Animation
*A sign in form with placeholder animation*


This is the eighth project from the Udemy course designed by Florin Pop and taught by Brad Traversy 
entitled 50 Projects: HTML, CSS, and JavaScript.

For each project, I watch the video outlining what is expected, then I create the code on my own,
doing my own research to learn the skills that I don't yet have.  An overview of all projects to date
can be found at: https://50-projects.com.  There is a screenshot of each project with a description
of the most important new skill I learned as well as a link to the working project.


## Critical Rendering Path
In this project, I used a click into the input field to replace the original label, "Email" with a 
string with each of the letters surrounded by span elements. I then immediately made a transition 
on the span elements. The transition occured before the span string had been rendered and painted, 
so the transistion had no starting point. I needed to learn all about the critical rendering path 
to understand why my transition wasn't working.

The working project can be found at: https://50-projects.com/08_Form_Wave_Animation/index.html.
