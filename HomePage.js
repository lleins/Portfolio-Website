
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

document.body.style.backgroundImage = RandomBackground();


window.addEventListener('scroll', function () {
  var navbar = document.getElementById('NavigationBar');
  var name = document.getElementById('TopText');
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var solidThreshold = 5; // Adjust this value to determine when to make the background solid

  if (scrollTop > solidThreshold) {
    name.style.color = "white";
    navbar.classList.add('solid');
  } else {
    name.style.color = "rgb(103, 161, 255)";
    navbar.classList.remove('solid');
  }
});

function goToNewPage() {
  window.location.href = 'Projects.html';
}



function MenuButton() {
  const MenuContainer = document.getElementById("MenuButtonMenuContainer");
  MenuContainer.style.display = "flex";
}

function CloseMenuButton() {
  const MenuContainer = document.getElementById("MenuButtonMenuContainer");
  MenuContainer.style.display = "none";
}






const items = document.querySelectorAll('.Load_Item');

function staggeredLoad() {
  items.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = 1;

    }, (index + 1) * 400); // 1000 milliseconds (1 second) delay between each item
  });
}

staggeredLoad();




//Function for Main Title----------------------------------------------------------

function ChangeTitle() {
  const Title_1 = document.getElementById("Main_Heading_1");
  const Title_2 = document.getElementById("Main_Heading_2");
  const Title_3 = document.getElementById("Main_Heading_3");
  const Title_4 = document.getElementById("Main_Heading_4");
  const Title_5 = document.getElementById("Main_Heading_5");
  const Title_6 = document.getElementById("Main_Heading_6");
  const Title_7 = document.getElementById("Main_Heading_7");
  const Title_8 = document.getElementById("Main_Heading_8");

  const Title_List = [
    Title_1, Title_2, Title_3, Title_4, Title_5, Title_6, Title_7, Title_8
  ];

  let currentIndex = 0;

  function transitionTitles() {

    Title_List[currentIndex].style.opacity = 0;

    currentIndex = (currentIndex + 1) % Title_List.length;

    Title_List[currentIndex].style.opacity = 1;
  }


  setInterval(transitionTitles, 8000);
}

ChangeTitle();

//Function for Main Title----------------------------------------------------------
