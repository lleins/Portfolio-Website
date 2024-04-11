
document.addEventListener('scroll', function () {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const maxTranslateY = windowHeight * 0.2; // Adjust the multiplier to control the maximum scrolling distance
    const translateYValue = Math.min(scrollY * 0.2, maxTranslateY); // Limit the translation value to the maximum
    document.getElementById('Video_Main').style.transform = `translateY(-${translateYValue}px)`;
});

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('top_nav');
    if (window.scrollY > 50) { // Change 50 to your desired scroll position
        navbar.style.backgroundColor = 'rgba(15, 15, 15, 1)'; // New background color
    } else {
        navbar.style.backgroundColor = 'rgba(15, 15, 15, 0)'; // Default background color
    }
});


/*
document.addEventListener("DOMContentLoaded", function() {
    // Text to be displayed
    var text = "Lukas Leins";

    // Speed at which each character is typed (in milliseconds)
    var speed = 80;

    var index = 0;
    var typewriterText = document.getElementById('top_name_text');

    function typeWriter() {
        if (index < text.length) {
            typewriterText.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    // Start typing when the DOM content is loaded
    typeWriter();

  
});
*/ 

/*

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to type out the text
  function typeWriter(text_1, id) {
    // Text to be displayed
    var text = text_1;
  
    // Speed at which each character is typed (in milliseconds)
    var speed = 50;
  
    var index = 0;
    var typewriterText = document.getElementById(id);
    typewriterText.textContent = "";
    function type() {
      if (index < text.length) {
        typewriterText.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, speed);
      }
    }
  
    // Start typing
    type();
  }
  
  // Function to trigger typing when scrolling onto the selected div
  function triggerTyping() {
    const element = document.getElementById('container_text');
    if (isInViewport(element)) {

        typeWriter("Hello there!", "hi_title");
      
      
      window.removeEventListener('scroll', triggerTyping); // Remove the event listener after typing starts
    }
  }
  
  // Event listener for scrolling
  window.addEventListener('scroll', triggerTyping);
  
  // Call triggerTyping initially in case the element is already in viewport
  triggerTyping();




  function handleScrollAnimation() {
    var element = document.getElementById('project_1_container');
    var bounding = element.getBoundingClientRect();

    // Check if the top of the element is within the viewport
    if (bounding.top < window.innerHeight && bounding.bottom >= 0) {
      element.style.animation = 'slideIn 1s ease forwards'; // Trigger animation when in view
      window.removeEventListener('scroll', handleScrollAnimation); // Remove event listener after animation is triggered
    }
  }

  window.addEventListener('scroll', handleScrollAnimation);
*/ 

function randomNumber(min, max) {
    let numb = Math.random() * (max - min) + min;
    return parseInt(numb);
}


function RandomBackground() {
    const image = [];
    image[0] = "";
    image[1] = "url('Images/BackMain1.jpg')";
    image[2] = "url('Images/BackMain4.jpg')";

    let numb = randomNumber(1, 3);
    return image[numb];
}


const background_div = document.getElementById("Home_tab");

//background_div.style.backgroundImage = RandomBackground();


function goToCV() {
    window.location.href = 'Resume.html';
}



function MenuButton() {
    const MenuContainer = document.getElementById("MenuButtonMenuContainer");
    MenuContainer.style.display = "flex";
}

function CloseMenuButton() {
    const MenuContainer = document.getElementById("MenuButtonMenuContainer");
    MenuContainer.style.display = "none";
}


function scrollintoview_Home() {
    const targetDiv = document.getElementById("Main_home_tab");
    targetDiv.scrollIntoView({ behavior: 'smooth' });
}

function scrollintoview_projects() {
    const targetDiv = document.getElementById("Projects_tab");
    targetDiv.scrollIntoView({ behavior: 'smooth' });
}

function scrollintoview_resume() {
    const targetDiv = document.getElementById("scroll_resume_container");
    targetDiv.scrollIntoView({ behavior: 'smooth' });
}

function scrollintoview_contact() {
    const targetDiv = document.getElementById("Marker");
    targetDiv.scrollIntoView({ behavior: 'smooth' });
}


const items = document.querySelectorAll('.Load_Item');

function staggeredLoad() {
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = 1;

        }, (index + 1) * 300); // 1000 milliseconds (1 second) delay between each item
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

    const Title_List = [
        Title_1, Title_2, Title_3, Title_4, Title_5, Title_6, Title_7
    ];

    let currentIndex = 0;

    function transitionTitles() {

        Title_List[currentIndex].style.opacity = 0;

        currentIndex = (currentIndex + 1) % Title_List.length;

        Title_List[currentIndex].style.opacity = 1;
    }


    setInterval(transitionTitles, 10000);
}

//ChangeTitle();

//Function for Main Title----------------------------------------------------------



function Open_GitHub() {
    const githubUrl = "https://github.com/lleins";
    window.open(githubUrl, '_blank');
}

function openLinkedIn() {
    const linkedinUrl = "https://www.linkedin.com/in/lukas-leins-802474208";
    window.open(linkedinUrl, '_blank');
}


function visit_Raven() {
    const RavenUrl = "http://50.18.247.63:3000/";
    window.open(RavenUrl, '_blank');
}

function visit_ComicFinds() {
    const RavenUrl = "http://3.21.165.54/Home.html";
    window.open(RavenUrl, '_blank');
}

function Open_GitHub_Comic_finds() {
    const githubUrl = "https://github.com/lleins/Comic-Finds";
    window.open(githubUrl, '_blank');
}

function Open_GitHub_Pixel_Peak() {
    const githubUrl = "https://github.com/lleins/Pixel-Peak";
    window.open(githubUrl, '_blank');
}

function Open_GitHub_Number() {
    const githubUrl = "https://github.com/lleins/Messaging-App";
    window.open(githubUrl, '_blank');
}

/*
var images = document.getElementById('carousel').children;
var dots = document.getElementsByClassName("dot");
var index = 0;
 
function nextImage() {
    images[index].classList.remove('active');
    dots[index].classList.remove('active-dot');
    index++;
    if (index >= images.length) {
        index = 0;
    }
    images[index].classList.add('active');
    dots[index].classList.add('active-dot');
}
 
function previousImage() {
    images[index].classList.remove('active');
    dots[index].classList.remove('active-dot');
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    images[index].classList.add('active');
    dots[index].classList.add('active-dot');
}
 
*/





function learn_more(id) {
    const learn_container = document.getElementById(id);
    const value = getComputedStyle(learn_container);
    if (value.opacity === "1") {
        learn_container.style.opacity = 0;
    } else if (value.opacity === "0") {
        learn_container.style.opacity = 1;
    }

}

function close_learn_more(id) {
    const learn_container = document.getElementById(id);
    learn_container.style.opacity = 0;
}









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





/*Flask Python Communication for Contact Form -----------------*/



function hideSuccess() {
    const Success = document.getElementById('success_notif');
    Success.style.display = 'none';
}

function hideFail() {
    const Fail = document.getElementById('fail_notif');
    Fail.style.display = 'none';

}




function Call_Flask() {
    const TimetoHide = 6000;
    const Fail = document.getElementById('fail_notif');
    const Success = document.getElementById('success_notif');
    const Main_Button = document.getElementById("MainButton");
    const Loader_Contact = document.getElementById("Loader_contact");

    const NameText = document.getElementById('NameTextBox').value;      //Name Text Box
    const ClearNameText = document.getElementById('NameTextBox');

    const EmailText = document.getElementById('EmailTextBox').value;  //Email Text Box
    const ClearEmailText = document.getElementById('EmailTextBox');

    const BodyText = document.getElementById('MessageTextBox').value;
    const ClearBodyText = document.getElementById('MessageTextBox');

    ClearNameText.style.color = "rgb(150, 150, 150)";
    ClearBodyText.style.color = "rgb(150, 150, 150)";
    ClearEmailText.style.color = "rgb(150, 150, 150)";

    Loader_Contact.style.display = "block";

    const Data = { Name: NameText, Email: EmailText, Body: BodyText };

    console.log('NameText:', NameText);
    console.log('NameText:', EmailText);
    console.log('NameText:', BodyText);

    if (NameText === "" && EmailText === "" && BodyText === "") { //All 3 empty
        ClearNameText.style.border = " 1px solid rgb(255, 50, 50, .8)";
        ClearEmailText.style.border = " 1px solid rgb(255, 50, 50, .8)";
        ClearBodyText.style.border = " 1px solid rgb(255, 50, 50, .8)";
        Main_Button.style.color = "rgb(10, 10, 10, 1)";
        Loader_Contact.style.display = "none";
        setTimeout(function () {
            ClearNameText.style.border = "0px solid rgb(10, 10, 10, .7)";
            ClearEmailText.style.border = "0px solid rgb(10, 10, 10, .7)";
            ClearBodyText.style.border = "0px solid rgb(10, 10, 10, .7)";
        }, 3000);
    } else if (NameText === "" && EmailText === "" && BodyText !== "") { //Name, Email empty
        ClearNameText.style.border = " 1px solid rgb(255, 50, 50, .8)";
        ClearEmailText.style.border = " 1px solid rgb(255, 50, 50, .8)";
        Main_Button.style.color = "rgb(10, 10, 10, 1)";
        Loader_Contact.style.display = "none";
        setTimeout(function () {
            ClearNameText.style.border = "0px solid rgb(10, 10, 10, .7)";
            ClearEmailText.style.border = "0px solid rgb(10, 10, 10, .7)";
        }, 3000);
    } else if (NameText === "" && EmailText !== "" && BodyText === "") { //Name, Body empty
        ClearNameText.style.border = " 1px solid rgb(255, 50, 50, .8)";
        ClearBodyText.style.border = " 1px solid rgb(255, 50, 50, .8)";
        Main_Button.style.color = "rgb(10, 10, 10, 1)";
        Loader_Contact.style.display = "none";
        setTimeout(function () {
            ClearNameText.style.border = "0px solid rgb(10, 10, 10, .7)";
            ClearBodyText.style.border = "0px solid rgb(10, 10, 10, .7)";
        }, 3000);
    } else if (NameText !== "" && EmailText === "" && BodyText === "") { //Email, Body empty
        ClearEmailText.style.border = " 1px solid rgb(255, 50, 50, .8)";
        ClearBodyText.style.border = " 1px solid rgb(255, 50, 50, .8)";
        Main_Button.style.color = "rgb(10, 10, 10, 1)";
        Loader_Contact.style.display = "none";
        setTimeout(function () {
            ClearEmailText.style.border = "0px solid rgb(10, 10, 10, .7)";
            ClearBodyText.style.border = "0px solid rgb(10, 10, 10, .7)";
        }, 3000);
    } else if (NameText !== "" && EmailText !== "" && BodyText === "") { //Body empty
        ClearBodyText.style.border = " 1px solid rgb(255, 50, 50, .8)";
        Main_Button.style.color = "rgb(10, 10, 10, 1)";
        Loader_Contact.style.display = "none";
        setTimeout(function () {
            ClearBodyText.style.border = "0px solid rgb(10, 10, 10, .7)";
        }, 3000);
    } else if (NameText !== "" && EmailText === "" && BodyText !== "") { //Email empty
        ClearEmailText.style.border = " 1px solid rgb(255, 50, 50, .8)";
        Main_Button.style.color = "rgb(10, 10, 10, 1)";
        Loader_Contact.style.display = "none";
        setTimeout(function () {
            ClearEmailText.style.border = "0px solid rgb(10, 10, 10, .7)";
        }, 3000);
    } else if (NameText === "" && EmailText !== "" && BodyText !== "") { //Name empty
        ClearNameText.style.border = " 1px solid rgb(255, 50, 50, .8)";
        Main_Button.style.color = "rgb(10, 10, 10, 1)";
        Loader_Contact.style.display = "none";
        setTimeout(function () {
            ClearNameText.style.border = "0px solid rgb(10, 10, 10, .7)";
        }, 3000);
    } else if (NameText !== "" && EmailText !== "" && BodyText !== "") { //None empty
        fetch('https://Luke2324.pythonanywhere.com/process_data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data)
        })
            .then(response => response.json())
            .then(data => {
                ClearNameText.style.color = "rgb(255, 255, 255)";
                ClearBodyText.style.color = "rgb(255, 255, 255)";
                ClearEmailText.style.color = "rgb(255, 255, 255)";
                Loader_Contact.style.display = "none";
                Success.style.display = 'block';
                ClearNameText.value = '';
                ClearEmailText.value = '';
                ClearBodyText.value = '';
                setTimeout(hideSuccess, TimetoHide);
            })
            .catch(error => {
                console.error('An error occurred:', error);
                ClearNameText.style.color = "rgb(255, 255, 255)";
                ClearBodyText.style.color = "rgb(255, 255, 255)";
                ClearEmailText.style.color = "rgb(255, 255, 255)";
                Loader_Contact.style.display = "none";
                Fail.style.display = 'block';
                setTimeout(hideFail, TimetoHide);
            });
    }
}



/*Flask Python Communication for Contact Form -----------------*/

