/*function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdow-content");
        var i;
        for (i=0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
} */

/*
document.getElementById("JellyK").style.color = 'red';

document.addEventListener('click', function(event) {
    const dropDownBtn = document.getElementById('expand-toggle');
    
    if (dropDownBtn.contains(event.Target)) {
        dropDownBtn.style.backgroundColor = 'red';
    }
}); */

// document.addEventListener('click', function(event) {
//     const checkbox = document.getElementById('expand-toggle');

//     // Check if the click target is not the checkbox itself
//     if (!checkbox.contains(event.target)) {
//         checkbox.checked = false;
//     }
// });

const copyrightLabels = document.getElementsByClassName("copyright");

for(let i = 0; i < copyrightLabels.length; i++) {
    let element = copyrightLabels[i];
    element.textContent = "© Angelica Knudsen 2025";
  }