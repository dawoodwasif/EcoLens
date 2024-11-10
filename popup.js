let companyData = [];
let homebg;

document.getElementById('submitsearch').addEventListener('click', async function() {
  console.log(document.getElementById("searching").value);
  let searchValue = document.getElementById("searching").value;
  searchValue = searchValue.charAt(0).toUpperCase() + searchValue.slice(1).toLowerCase();
  console.log(searchValue)
  let selectedCompany = companyData.filter(company => (
    company.companyName === searchValue
  ))
  selectedCompany = selectedCompany[0];

  if (!selectedCompany) {
    try {
      const response = await fetch('http://localhost:5000/api/gpt-company-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ companyName: searchValue })
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch data for ${searchValue}: ${response.status}`);
      }

      const fetchedData = await response.json();
      selectedCompany = fetchedData;

      // Cache the new data for future searches
      if (selectedCompany) {
        companyData.push(selectedCompany);
      }
    } catch (error) {
      console.error("Error fetching company data:", error);
      alert("Could not retrieve company data. Please try again later.");
      return;
    }
  }

  let score = 100 - (selectedCompany.mainScore * 2);
  if (selectedCompany.mainScore < 20) {
    homebg = "linear-gradient(359.28deg, #D8E6AF 4.1%, rgba(255, 255, 255, 0.25) 96.86%)";
  } else homebg = "linear-gradient(359.28deg, #E6C3AF 4.1%, rgba(255, 255, 255, 0.25) 96.86%)";
  document.body.style.background = homebg;
  document.getElementById('manufacturer').textContent = searchValue;
  document.getElementById("searching").value = "";
  document.getElementById('main').innerHTML = score + "<span>%</span>";
  let el = document.getElementById('circleBar');
  el.classList.remove("anim");
  void el.offsetWidth;
  el.classList.add("anim");
  document.getElementById('climate').textContent = selectedCompany.climate;
  document.getElementById('water').textContent = selectedCompany.water;
  document.getElementById('forests').textContent = selectedCompany.forests;
  if (selectedCompany.warning.length > 0) {
    document.getElementById('warning-text').innerHTML = "&nbsp;" + selectedCompany.warning;
    document.getElementById('warning-icon').src= "img/warning.png";
  } else {
    document.getElementById('warning-text').innerHTML = "&nbsp;No current warnings";
    document.getElementById('warning-icon').src= "img/check.png";
  }
  document.querySelector('svg').addEventListener('click', function() {
    let newURL = selectedCompany.mainScoreLink;
    chrome.tabs.create({ url: newURL });
  });
  
  if(score>60){
    document.getElementById('circleBar').setAttribute('style','stroke: #89C73A');
  } else if(score>55){
    document.getElementById('circleBar').setAttribute('style','stroke: #E6D05E');
  }else{
    document.getElementById('circleBar').setAttribute('style','stroke: #DB3C32');
  }
  
});

document.querySelector("body").addEventListener('click', function(e) {
  if (e.target.id != "searching") {
    document.getElementById("manufacturer").style.display = "block";
  }
})

function hoverChanges() {
  document.querySelector(".warning").style.display = "none";
  document.body.style.color = "white";
  document.getElementById("main").style.color = "white";
  document.querySelector("span").style.color = "white";
  let smallCircles = document.querySelectorAll(".smaller-circle");
  for (let i = 0; i < smallCircles.length; i++) {
    smallCircles[i].style.background = "rgba(225, 225, 225, 0.5)";
    smallCircles[i].style.color = "black";
    smallCircles[i].style.border = "1.5px solid #EFEFEF";
  }
  document.getElementById("info").style.display = "block";
  document.getElementById("manufacturer").style.color = "white";
  document.getElementById("submitsearch").src = "img/white-search.png";
}

// Update the relevant fields with the new data.
const setDOMInfo = async info => { 
    document.getElementById("loadingMessage").style.display = "block";
    document.getElementById("warning-icon").style.display = "none";


    info.manufacturer = info.manufacturer.split(' ')[0];
    // Attempt to find the company in local data.json
    let selectedCompany = companyData.find(company => company.companyName === info.manufacturer);
    
    if (!selectedCompany) {
        try {
            const response = await fetch('http://localhost:5000/api/gpt-company-data', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ companyName: info.manufacturer })
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch data for ${info.manufacturer}: ${response.status}`);
            }

            selectedCompany = await response.json();

            // Cache the newly fetched data locally in companyData
            companyData.push(selectedCompany);
        } catch (error) {
            console.error("Error fetching company data:", error);
            alert("Could not retrieve company data. Please try again later.");
            return;
        }

      
    
    }


    let score = 100 - (selectedCompany.mainScore * 2);
    document.getElementById("loadingMessage").style.display = "none";
    document.getElementById("warning-icon").style.display = "block";


    if (selectedCompany.mainScore < 20) {
      homebg = "linear-gradient(359.28deg, #D8E6AF 4.1%, rgba(255, 255, 255, 0.25) 96.86%)";
    } else homebg = "linear-gradient(359.28deg, #E6C3AF 4.1%, rgba(255, 255, 255, 0.25) 96.86%)";
    document.body.style.background = homebg;

    //let style = document.querySelector('style');
    //let innerStyle = "@keyframes anim{100%{stroke-dashoffset: " + (472 - 472 * score).toString() + ";}}"
    //style.innerHTML = innerStyle;

    document.getElementById('manufacturer').textContent = info.manufacturer;
    document.getElementById('main').innerHTML = score + "<span>%</span>";
    document.getElementById('climate').textContent = selectedCompany.climate;
    document.getElementById('water').textContent = selectedCompany.water;
    document.getElementById('forests').textContent = selectedCompany.forests;
    if (selectedCompany.warning.length > 0) {
      document.getElementById('warning-text').innerHTML = "&nbsp;" + selectedCompany.warning;
      document.getElementById('warning-icon').src= "img/warning.png";
    } else {
      document.getElementById('warning-text').innerHTML = "&nbsp;No current warnings";
      document.getElementById('warning-icon').src= "img/check.png";
    }
    
    
    document.getElementById('info').addEventListener('click', function() {
      var newURL = "https://www.cdp.net/en/companies/companies-scores";
      chrome.tabs.create({ url: newURL });
    });
    document.querySelector('svg').addEventListener('click', function() {
      let newURL = selectedCompany.mainScoreLink;
      chrome.tabs.create({ url: newURL });
    });
    document.getElementById('climate').addEventListener('mouseover', function() {
      document.body.style.backgroundImage = "url('img/climate-background.png')";
      document.getElementById("info").style.background = "#65504F";
      hoverChanges();
    })
    document.getElementById('circleBar').addEventListener('mouseover', function() {
      document.body.style.backgroundImage = 'none';
      document.body.style.background = homebg;
      //window.location.href = "http://stackoverflow.com";
    });

    document.getElementById('forests').addEventListener('mouseover', function() {
      document.body.style.backgroundImage = "url('img/forest-background.png')";
      document.getElementById("info").style.background = "#8D9575";
      hoverChanges();
    });

    document.getElementById('water').addEventListener('mouseover', function() {
      document.body.style.backgroundImage = "url('img/water-background.png')";
      document.getElementById("info").style.background = "#556176";
      hoverChanges();
      
    });

        
  
   document.querySelector('svg').addEventListener('mouseover', function() {
    let smallCircles = document.querySelectorAll(".smaller-circle");
    for (let i = 0; i < smallCircles.length; i++) {
      smallCircles[i].style.background = "#14213D";
      smallCircles[i].style.color = "white";
      smallCircles[i].style.border = "none";
    }
      document.body.style.background = homebg;
      document.getElementById("main").style.color = "black";
      document.querySelector("span").style.color = "black";
      document.body.style.color = "black";
      document.getElementById("manufacturer").style.color = "black";
      document.getElementById("submitsearch").src = "img/black-search.png";
      document.getElementById("info").style.display = "none";
      document.querySelector(".warning").style.display = "flex";
    });

  
    
  //document.body.style.color = "white";
  // let smallCircles = document.querySelectorAll(".smaller-circle");
  // for (let i = 0; i < smallCircles.length; i++) {
  //   smallCircles[i].style.background = "rgba(225, 225, 225, 0.5)";
  //   smallCircles[i].style.color = "white";
  //   smallCircles[i].style.border = "none";
  // }


    // document.getElementById('water').addEventListener('mouseover', function() {
    //   document.body.style.backgroundImage = "url('img/water-background.png')";
    //   document.body.style.color = "white";
    // });
    // document.querySelector(".loading").style.display = "none";
    // document.querySelector(".main-data").style.display = "block";
    // let manufacturers = [];
    // let storage = localStorage["manufacturer"];
    // if (storage != undefined) {
    //     manufacturers = JSON.parse(localStorage["manufacturer"])
    // };
    // if (manufacturers.length < 1) {
    //     let manArr = [];
    //     manArr.push((info.manufacturer));
    //     localStorage["manufacturer"] = JSON.stringify(manArr);
    // } else {
    //     manufacturers.push((info.manufacturer));
    //     localStorage["manufacturer"] = JSON.stringify(manufacturers);
    // }


  };

  // Once the DOM is ready...
  window.addEventListener('DOMContentLoaded', () => {
    fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      companyData = data;
    })
    .catch((err) => {
      //throw(err);
    })
    .finally(() => {
      //finally something
    });

    document.querySelector(".SearchBar").addEventListener('click', function() {
      document.getElementById("manufacturer").style.display = "none";
    })

    // ...query for the active tab...
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, tabs => {
      // ...and send a request for the DOM info...
      chrome.tabs.sendMessage(
          tabs[0].id,
          {from: 'popup', subject: 'DOMInfo'},
          // ...also specifying a callback to be called 
          //    from the receiving end (content script).
          setDOMInfo);
    });
  });


// Chatbox Elements
const chatButton = document.getElementById("chatButton");
const chatContainer = document.getElementById("chatContainer");
const closeChat = document.getElementById("closeChat");
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const sendChat = document.getElementById("sendChat");

let selectedProductContext = {};

// Show Chatbox
chatButton.addEventListener("click", () => {
  chatContainer.style.display = "block";
});

// Close Chatbox
closeChat.addEventListener("click", () => {
  chatContainer.style.display = "none";
});


function getContextFromDOM() {
  const context = {
    name: document.getElementById('manufacturer')?.textContent.trim() || '',
    score: document.getElementById('main')?.textContent.replace('%', '').trim() || '',
    climate: document.getElementById('climate')?.textContent.trim() || '',
    water: document.getElementById('water')?.textContent.trim() || '',
    forests: document.getElementById('forests')?.textContent.trim() || '',
    warning: document.getElementById('warning-text')?.textContent.trim() || 'No warnings'
  };
  console.log("DOM Context:", context);
  return context;
}

// Initialize selectedProductContext on page load with default values
// document.addEventListener('DOMContentLoaded', () => {
//   selectedProductContext = getContextFromDOM();
// });


// Send Chat Message with Product Context
sendChat.addEventListener("click", async () => {
  const userMessage = chatInput.value.trim();

  if (!userMessage) return;

  // Display user's message in the chat
  displayMessage(userMessage, "user");

  // Clear the input field
  chatInput.value = '';

   // Fetch the latest context from DOM
   selectedProductContext = getContextFromDOM();
  //  displayMessage("Fetching data for " + selectedProductContext.name, "gpt");

  // Prepare the payload with user message and product context
  const payload = {
    message: userMessage,
    context: selectedProductContext
  };

  // Send the message to your backend
  try {
      const response = await fetch('http://localhost:5000/api/chat', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
      });

      const data = await response.json();

      // Display GPT's response
      if (data.reply) {
          displayMessage(data.reply, "gpt");
      } else {
          displayMessage("Error: Unable to get response", "gpt");
      }
  } catch (error) {
      console.error("Error:", error);
      displayMessage("Error: Unable to connect to server", "gpt");
  }
});

function displayMessage(message, sender) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("chatMessage", sender);
  messageElement.innerHTML = `<strong>${sender === 'user' ? 'You' : 'GPT'}:</strong> ${message}`;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

  // Add event listener to "Buy" button to change color to dark green and text to "Bought" when clicked
  document.getElementById('buyButton').addEventListener('click', function() {
    this.classList.add('clicked');
    this.textContent = 'Bought';
  });