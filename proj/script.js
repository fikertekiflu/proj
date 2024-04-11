var typed = new Typed(".car",{
    strings:["Tech enthusiast","Passionate learner","Collaborative problem solver."],
    typeSpeed:110,
    backSpeed:60,
    loop:true
   });
   const dayNight = document.querySelector(".day-night");
// Add an event listener to toggle between light and dark mode when the button is clicked
dayNight.addEventListener("click", () => {
    // Toggle between sun and moon icons
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    
    // Toggle dark mode for the body
    document.body.classList.toggle("dark");
    
    // Save the user's preference in local storage
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

// Check the user's preference in local storage and set the theme accordingly when the page loads
window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        // Apply dark mode if the user's preference is set to dark
        document.body.classList.add("dark");
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        // Apply light mode by default if no preference is found or if it's set to light
        document.body.classList.remove("dark");
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});

var typed = new Typed(".junier",{
    strings:["dedicated","junier"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
   });
   var typed = new Typed(".typing",{
    strings:["Kiflu","Fitany"],
    typeSpeed:100,
    backSpeed:150,
    loop:true
   });

   const nav = document.querySelector(".nav");
   const navList = nav.querySelectorAll("li");
   const totalNavList = navList.length;
   const allSections = document.querySelectorAll(".section"); // Assuming your sections have the "section" class
   
   for (let i = 0; i < totalNavList; i++) {
       const a = navList[i].querySelector("a");
       a.addEventListener("click", function(event) {
           event.preventDefault(); // Prevent default link behavior
           for (let j = 0; j < totalNavList; j++) {
               navList[j].querySelector("a").classList.remove("active");
           }
           this.classList.add("active");
           showSection(this);
           if(window < innerWidth < 1200)
           {
            asideSectionTogglerBtn();
           }
       });
   }
   function showSection(element) {
       for (let i = 0; i < allSections.length; i++) {
           allSections[i].classList.remove("active");
       }
       const target = element.getAttribute("href").split("#")[1];
       document.querySelector("#" + target).classList.add("active");
   }

   const navTogglerBtn = document.querySelector(".nav-toggler")
   const aside = document.querySelector(".aside");
   navTogglerBtn.addEventListener("click",()=>{
     asideSectionTogglerBtn();
   })

   function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0; i<allSections.length; i++)
    {
      allSection[i].classList.toggle("open");
    }
   }
   const navLinks = document.querySelectorAll('.nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                targetSection.scrollIntoView({ behavior: 'smooth' });
            });
        });

