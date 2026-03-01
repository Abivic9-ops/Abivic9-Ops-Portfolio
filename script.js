let words=document.querySelectorAll(".word")
words.forEach((word)=>{
    let letters= word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);

    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity ="1";

let changeText=()=>{
    let currentWord = words[currentWordIndex];
    let nextword = currentWordIndex === maxWordIndex? words[0] :words[currentWordIndex+1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className ="letter out";
        },i * 80);
    });
    nextword.style.opacity="1";
    Array.from(nextword.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.classNamem="letter in";
        },340 + i * 80)
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 :currentWordIndex +1;
};


changeText ();
setInterval(changeText,3000)

// // circle skill //////

// const circles=document.querySelectorAll(".circle");
// circles.forEach(elem=>{
//     var dots = elem.getAttribute("data-dots");
//     var marked = elem.getAttribute("data-percent");
//     var percent = Math.floor(dots*marked/100);
//     var points = "";
//     var rotate = 360/dots;

//     for(let i = 0; i < dots ;i++){
//         points += " <div class="points" style="--i:$(i); --rot:$(rotate)deg"> </div>";
   
//     }
//     elem.innerHTML = points;

// })

// // Select the elements from your HTML
// let menuIcon = document.querySelector("#menu-icon");
// let navlist = document.querySelector(".navlist");

// // Toggle the 'open' class when the icon is clicked
// menuIcon.onclick = () => {
//     menuIcon.classList.toggle("bx-x");
//     navlist.classList.toggle("open");  
// };

// // Close the menu automatically when the user scrolls
// window.onscroll = () => {
//     menuIcon.classList.remove("bx-x");
//     navlist.classList.remove("open");
// };

// // // Wait for the DOM to fully load
// document.addEventListener('DOMContentLoaded', () => {
//     const menuIcon = document.querySelector('#menu-icon');
//     const navlist = document.querySelector('.navlist');

//     // Check if the elements exist on the current page to avoid errors
//     if (menuIcon && navlist) {
//         menuIcon.addEventListener('click', () => {
//             // Toggle the 'bx-x' class (changes hamburger to 'X' if using Boxicons)
//             menuIcon.classList.toggle('bx-x');
//             // Toggle the open class on the navigation list
//             navlist.classList.toggle('open');
//         });

//         // Optional: Close menu when a link is clicked
//         navlist.addEventListener('click', () => {
//             menuIcon.classList.remove('bx-x');
//             navlist.classList.remove('open');
//         });
//     }
// });

document.addEventListener('DOMContentLoaded', () => {
    // We use ID for the icon and class for the list as seen in your code
    const menuIcon = document.querySelector('#menu-icon');
    const navlist = document.querySelector('.navlist');

    if (menuIcon && navlist) {
        menuIcon.onclick = () => {
            // Toggles the 'X' icon
            menuIcon.classList.toggle('bx-x');
            // Toggles the menu visibility
            navlist.classList.toggle('open');
        };

        // Close menu when a link is clicked (useful for multi-page)
        navlist.onclick = () => {
            menuIcon.classList.remove('bx-x');
            navlist.classList.remove('open');
        };
    } else {
        console.error("Menu Icon or Navlist missing on this page!");
    }
});