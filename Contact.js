/*Background Image Change ----------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {

});
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

/*Background Image Change ----------------------------------------------------*/



/*Navigation Bar scroll event: Transparency & last name color -----------------*/

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
/*Navigation Bar scroll event: Transparency & last name color -----------------*/



/*TextArea Character Count Restriction ----------------------------------*/

const MessageTextArea = document.getElementById('MessageTextBox');
const MessageCharCount = document.getElementById('charCount');

const MaxCharLim = 500;

function UpdateCharCount() {

  const remainingChars = MaxCharLim - MessageTextArea.value.length;
  MessageCharCount.textContent = Math.max(remainingChars, 0);

  if (remainingChars < 0) {
    MessageTextArea.value = MessageTextArea.value.slice(0, MaxCharLim)
  }

}

MessageTextArea.addEventListener('input', UpdateCharCount);

UpdateCharCount();

/*TextArea Character Count Restriction ----------------------------------*/


function MenuButton() {
  const MenuContainer = document.getElementById("MenuButtonMenuContainer");
  MenuContainer.style.display = "flex";
}

function CloseMenuButton() {
  const MenuContainer = document.getElementById("MenuButtonMenuContainer");
  MenuContainer.style.display = "none";
}


/*Flask Python Communication for Contact Form -----------------*/
const Success = document.getElementById('ConfirmationNotif');
const Fail = document.getElementById('ProblemNotif');
const JsInfoText = document.getElementById('JsInfo');
const submitButton = document.getElementById('MainButton');
const SuccessImg = document.getElementById('SuccessImg');
const FailImg = document.getElementById('FailImg');

function hideSuccess() {
  Success.style.display = 'none';
  SuccessImg.style.display = 'none';
}

function hideFail() {
  Fail.style.display = 'none';
  FailImg.style.display = 'none';
}

const TimetoHide = 6000;


function Call_Flask() {
  const Main_Button = document.getElementById("MainButton");
  const Loader_Contact = document.getElementById("LoadingAnimation_Contact");

  const NameText = document.getElementById('NameTextBox').value;      //Name Text Box
  const ClearNameText = document.getElementById('NameTextBox');

  const EmailText = document.getElementById('EmailTextBox').value;  //Email Text Box
  const ClearEmailText = document.getElementById('EmailTextBox');

  const BodyText = document.getElementById('MessageTextBox').value;
  const ClearBodyText = document.getElementById('MessageTextBox');

  Main_Button.style.color = "rgb(255, 255, 255, 0)";
  Loader_Contact.style.display = "block";

  const Data = { Name: NameText, Email: EmailText, Body: BodyText };

  console.log('NameText:', NameText);
  console.log('NameText:', EmailText);
  console.log('NameText:', BodyText);

  if (NameText === "" && EmailText === "" && BodyText === "") { //All 3 empty
    ClearNameText.style.backgroundColor = "rgb(255, 50, 50, .8)";
    ClearEmailText.style.backgroundColor = "rgb(255, 50, 50, .8)";
    ClearBodyText.style.backgroundColor = "rgb(255, 50, 50, .8)";
    Main_Button.style.color = "rgb(255, 255, 255, 1)";
    Loader_Contact.style.display = "none";
    setTimeout(function () {
      ClearNameText.style.backgroundColor = "rgb(32, 48, 70)";
      ClearEmailText.style.backgroundColor = "rgb(32, 48, 70)";
      ClearBodyText.style.backgroundColor = "rgb(32, 48, 70)";
    }, 3000);
  } else if (NameText === "" && EmailText === "" && BodyText !== "") { //Name, Email empty
    ClearNameText.style.backgroundColor = "rgb(255, 50, 50, .8)";
    ClearEmailText.style.backgroundColor = "rgb(255, 50, 50, .8)";
    Main_Button.style.color = "rgb(255, 255, 255, 1)";
    Loader_Contact.style.display = "none";
    setTimeout(function () {
      ClearNameText.style.backgroundColor = "rgb(32, 48, 70)";
      ClearEmailText.style.backgroundColor = "rgb(32, 48, 70)";
    }, 3000);
  } else if (NameText === "" && EmailText !== "" && BodyText === "") { //Name, Body empty
    ClearNameText.style.backgroundColor = "rgb(255, 50, 50, .8)";
    ClearBodyText.style.backgroundColor = "rgb(255, 50, 50, .8)";
    Main_Button.style.color = "rgb(255, 255, 255, 1)";
    Loader_Contact.style.display = "none";
    setTimeout(function () {
      ClearNameText.style.backgroundColor = "rgb(32, 48, 70)";
      ClearBodyText.style.backgroundColor = "rgb(32, 48, 70)";
    }, 3000);
  } else if (NameText !== "" && EmailText === "" && BodyText === "") { //Email, Body empty
    ClearEmailText.style.backgroundColor = "rgb(255, 50, 50, .8)";
    ClearBodyText.style.backgroundColor = "rgb(255, 50, 50, .8)";
    Main_Button.style.color = "rgb(255, 255, 255, 1)";
    Loader_Contact.style.display = "none";
    setTimeout(function () {
      ClearEmailText.style.backgroundColor = "rgb(32, 48, 70)";
      ClearBodyText.style.backgroundColor = "rgb(32, 48, 70)";
    }, 3000);
  } else if (NameText !== "" && EmailText !== "" && BodyText === "") { //Body empty
    ClearBodyText.style.backgroundColor = "rgb(255, 50, 50, .8)";
    Main_Button.style.color = "rgb(255, 255, 255, 1)";
    Loader_Contact.style.display = "none";
    setTimeout(function () {
      ClearBodyText.style.backgroundColor = "rgb(32, 48, 70)";
    }, 3000);
  } else if (NameText !== "" && EmailText === "" && BodyText !== "") { //Email empty
    ClearEmailText.style.backgroundColor = "rgb(255, 50, 50, .8)";
    Main_Button.style.color = "rgb(255, 255, 255, 1)";
    Loader_Contact.style.display = "none";
    setTimeout(function () {
      ClearEmailText.style.backgroundColor = "rgb(32, 48, 70)";
    }, 3000);
  } else if (NameText === "" && EmailText !== "" && BodyText !== "") { //Name empty
    ClearNameText.style.backgroundColor = "rgb(255, 50, 50, .8)";
    Main_Button.style.color = "rgb(255, 255, 255, 1)";
    Loader_Contact.style.display = "none";
    setTimeout(function () {
      ClearNameText.style.backgroundColor = "rgb(32, 48, 70)";
    }, 3000);
  } else if (NameText !== "" && EmailText !== "" && BodyText !== "") { //None empty
    fetch('http://127.0.0.1:5000/process_data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Data)
    })
      .then(response => response.json())
      .then(data => {
        const outputResult = document.getElementById('outputResult');
        Main_Button.style.color = "rgb(255, 255, 255, 1)";
        Loader_Contact.style.display = "none";
        Success.style.display = 'flex';
        SuccessImg.style.display = 'flex';
        ClearNameText.value = '';
        ClearEmailText.value = '';
        ClearBodyText.value = '';
        setTimeout(hideSuccess, TimetoHide);
      })
      .catch(error => {
        console.error('An error occurred:', error);
        Main_Button.style.color = "rgb(255, 255, 255, 1)";
        Loader_Contact.style.display = "none";
        Fail.style.display = 'flex';
        FailImg.style.display = 'flex';
        setTimeout(hideFail, TimetoHide);
      });
  }
}



/*Flask Python Communication for Contact Form -----------------*/



const items = document.querySelectorAll('.Load_Item');

function staggeredLoad() {
  items.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = 1;

    }, (index + 1) * 400); // 1000 milliseconds (1 second) delay between each item
  });
}

staggeredLoad();



function Flask_Server_Status() {
  const Online_Status = document.querySelectorAll(".Online");
  const Offline_Status = document.querySelectorAll(".Offline");

  const Data = "";

  fetch('http://127.0.0.1:5000/process_data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(Data)
  })
    .then(response => response.json())
    .then(data => {
      if (data.response === "1") {
        Offline_Status[0].style.display = "none";
        Offline_Status[1].style.display = "none";
        Online_Status[0].style.display = "block";
        Online_Status[1].style.display = "block";
      } else {
        Offline_Status[0].style.display = "block";
        Offline_Status[1].style.display = "block";
      }

    })
    .catch(error => {

    });

}

Flask_Server_Status();