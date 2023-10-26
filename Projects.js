//Background Image Change ----------------------------------------------------

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

//Background Image Change ----------------------------------------------------



//Navigation Bar scroll event: Transparency & last name color -----------------

window.addEventListener('scroll', function () {
  var navbar = document.getElementById('NavigationBar');
  var name = document.getElementById('TopText');
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var solidThreshold = 50; // Adjust this value to determine when to make the background solid

  if (scrollTop > solidThreshold) {
    name.style.color = "white";
    navbar.classList.add('solid');
  } else {
    name.style.color = "rgb(103, 161, 255)";
    navbar.classList.remove('solid');
  }
});


//Navigation Bar scroll event: Transparency & last name color -----------------

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



//Image Zoom Effect----------------------------------------------------
function zoomImage(event, div) {
  const image = document.getElementById(div);

  const container = image.parentElement;

  // Calculate the position of the mouse within the container
  const x = (event.pageX - container.offsetLeft) / container.offsetWidth;
  const y = (event.pageY - container.offsetTop) / container.offsetHeight;

  // Apply a transform to zoom in around the mouse position
  image.style.transformOrigin = `${x * 50}% ${y * 10}%`;
  image.style.transform = "scale(1.2)"; // Adjust the scale factor as needed
}

function resetImage(div) {
  const image = document.getElementById(div);
  image.style.transform = "scale(1)"; // Reset the image scale
}

//Image Zoom Effect----------------------------------------------------







//Go to Github---------------------

function Pixel_Peak_GitOpen() {
  const Comic_Url = "https://github.com/lleins/Pixel-Peak"

  window.open(Comic_Url, '_blank')
}


function Comic_Finds_GitOpen() {
  const Comic_Url = "https://github.com/lleins/Comic-Book-Repository"

  window.open(Comic_Url, '_blank')
}

function Number_Recog_GitOpen() {
  const Numb_Url = "https://github.com/lleins/Number-Recognition"

  window.open(Numb_Url, '_blank')
}


function Music_Websearch_GitOpen() {
  const Music_Url = "https://github.com/lleins/Music-Web-Search"

  window.open(Music_Url, '_blank')
}

function Online_Notes_GitOpen() {
  const OnlineNotes_Url = "https://github.com/lleins/Online-Notes"

  window.open(OnlineNotes_Url, '_blank')
}

function Note_Taker_GitOpen() {
  const Note_Url = "https://github.com/lleins/Note-Taker"

  window.open(Note_Url, '_blank')
}

function Photo_Encrypter_GitOpen() {
  const Photo_Url = "https://github.com/lleins/Photo-Encrypter"

  window.open(Photo_Url, '_blank')
}

//Go to Github---------------------



const items = document.querySelectorAll('.Load_Item');

function staggeredLoad() {
  items.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = 1;

    }, (index + 1) * 400);
  });
}

staggeredLoad();


