// ----------------- Toggle Dark Mode ----------------- //
let toggle = document.getElementById("toggle-theme");
let root = document.querySelector(':root');
const change_theme = ()=>{
  if(toggle.childNodes[1].getAttribute("data-icon") == "ri:moon-fill"){
    toggle.childNodes[1].setAttribute("data-icon", "ph:sun-fill");
    root.style.setProperty('--clr-accent-300','#3b4252');
    root.style.setProperty('--clr-accent-100','#4c566a');
    root.style.setProperty('--clr-accent-200','#434c5e');
    root.style.setProperty('--clr-accent-400','#111318');
    root.style.setProperty('--clr-heading','#FFFFFF');
    root.style.setProperty('--clr-sub-heading','#FFFFFF');
    root.style.setProperty('--clr-info','#FFFFFF');
    // root.style.setProperty('--clr-accent-300','#111318');
    // root.style.setProperty('--clr-accent-100','#434c5e');

    // root.style.setProperty('--navbar-bg','#3F72AF');
    localStorage.setItem('theme','dark');
    // toggle.setAttribute("aria-label", "Toggle Dark Theme");
  }
  else{
    toggle.childNodes[1].setAttribute("data-icon", "ri:moon-fill");
    root.style.setProperty('--clr-accent-300','#E3FDFD');
    root.style.setProperty('--clr-accent-100','#ffffff');
    root.style.setProperty('--clr-accent-200','#EEFEFE');
    root.style.setProperty('--clr-accent-400','#CBF1F5');
    root.style.setProperty('--clr-heading','#212529');
    root.style.setProperty('--clr-sub-heading','#212529');
    root.style.setProperty('--clr-info','#212529');
    // root.style.setProperty('--navbar-bg','#3F72AF');
    localStorage.setItem('theme','light');
    // toggle.setAttribute("aria-label", "Toggle Light Theme");
  }
};
if (localStorage.getItem('theme') != null){
  let thm = localStorage.getItem('theme');
  if (thm == 'dark'){
    toggle.childNodes[1].setAttribute("data-icon", "ri:moon-fill"); 
  }
  else{
    toggle.childNodes[1].setAttribute("data-icon", "ph:sun-fill");
  } 
  change_theme();
}

toggle.addEventListener('click', change_theme);