
function randomNumber(min, max) { 
    let numb = Math.random() * (max - min) + min;
    return parseInt(numb);
} 

function RandomBackground(){
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


window.addEventListener('scroll', function() {
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

  function goToNewPage() {
    // Replace 'newpage.html' with the actual URL of the new page you want to navigate to
    window.location.href = 'Projects.html';
  }


  
function MenuButton(){
  const MenuContainer = document.getElementById("MenuButtonMenuContainer");
  MenuContainer.style.display = "flex";
}

function CloseMenuButton(){
  const MenuContainer = document.getElementById("MenuButtonMenuContainer");
  MenuContainer.style.display = "none";
}

