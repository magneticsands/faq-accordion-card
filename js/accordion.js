var accordionList = document.querySelectorAll (".accordion");

// console.log(accordionList);

// Toggles accordion

accordionList.forEach((accordion) => {
    accordion.addEventListener("click",() => {
        var classes = accordion.classList;
        if (classes.contains("open")) {
            classes.remove("open");
        } else {
            classes.add("open");
        }
    })
})