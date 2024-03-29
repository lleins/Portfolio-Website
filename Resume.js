
function randomNumber(min, max) {
  let numb = Math.random() * (max - min) + min;
  return parseInt(numb);
}

function RandomBackground() {
  const image = [];
  image[0] = "";
  image[1] = "url('Images/BackMain1.jpg')";
  image[2] = "url('Images/BackMain2.jpg')";
  image[3] = "url('Images/BackMain3.jpg')";
  image[4] = "url('Images/BackMain4.jpg')";
  image[5] = "url('Images/BackMain5.jpg')";
  image[6] = "url('Images/BackMain6.jpg')";
  image[7] = "url('Images/BackMain7.jpg')";
  image[8] = "url('Images/BackMain8.jpg')";
  let numb = randomNumber(1, 9);
  return image[numb];
}

var myDiv = document.getElementById("description");

myDiv.style.backgroundImage = RandomBackground();

window.addEventListener('scroll', function () {
  var navbar = document.getElementById('NavigationBar');
  var name = document.getElementById('TopText');
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var solidThreshold = 150; // Adjust this value to determine when to make the background solid

  if (scrollTop > solidThreshold) {
    name.style.color = "white";
    navbar.classList.add('solid');
  } else {
    name.style.color = "rgb(103, 161, 255)";
    navbar.classList.remove('solid');
  }
});


function downloadResume() {
  var url = 'Lukas Leins Updated Resume 2023.pdf'; // Replace with the actual URL of your resume file

  window.open(url, '_blank');



  link.click();
}

//For Mobile Menu button----------------------------------------------------
function MenuButton() {
  const MenuContainer = document.getElementById("MenuButtonMenuContainer");
  MenuContainer.style.display = "flex";
}

function CloseMenuButton() {
  const MenuContainer = document.getElementById("MenuButtonMenuContainer");
  MenuContainer.style.display = "none";
}
//For Mobile Menu button----------------------------------------------------


//for github link--------------------------------------------------------------------------------------------
function Open_GitHub() {
  const Music_Url = "https://github.com/lleins"

  window.open(Music_Url, '_blank')
}

//for github link--------------------------------------------------------------------------------------------
const items = document.querySelectorAll('.Load_Item');

function staggeredLoad() {
  items.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = 1;

    }, (index + 1) * 400); // 1000 milliseconds (1 second) delay between each item
  });
}

staggeredLoad();
