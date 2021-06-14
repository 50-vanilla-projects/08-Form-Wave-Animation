form = document.querySelector("form");

form.addEventListener("focusin", (e) => {
    console.log(e.target);
    console.log(e.target.id);
    placeholder = document.querySelector(``);
    console.log(placeholder);
    labelInFocus = document.querySelector(`label[for="${e.target.id}"]`);
    
    placeholder.classList.add("hidden");
    labelInFocus.classList.remove("hidden");
})