// document.addEventListener("DOMContentLoaded", getUserLocation);

var hospitalList = document.getElementById("hospital-list");

function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
  function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    const api_url = `https://ayushservice.azurewebsites.net/getAllInfoToSend/${longitude}/${latitude}`;
    console.log(position);
    // console.log(api_url)
    getapi(api_url);
  }
}

// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  console.log(data);
  if (response) {
    show(data);
  }
}

// Function to hide the loader
// function hideloader() {
//   document.getElementById("loading").style.display = "none";
// }
// Function to define innerHTML for HTML table
function show(data) {
  data.forEach((hospital) => {
    makeHospitalUI(hospital);
  });
}

var hosObj = {
  address: "ABES Anginnering college",
  close_time: "4:00",
  distance: "27861",
  hospital_name: "Kailash Hospital",
  open_time: "8:00",
  phone_No: "329347229",
  services: ["A", "B", "C"],
  website_link: "http//www.google.com",
};

makeHospitalUI(hosObj);
makeHospitalUI(hosObj);
makeHospitalUI(hosObj);
makeHospitalUI(hosObj);
makeHospitalUI(hosObj);
makeHospitalUI(hosObj);

function makeHospitalUI(hospital) {
  var hospitalBlock = document.createElement("div");
  hospitalBlock.setAttribute("class", "col-md-6 col-lg-4 my-4");

  var hospitalCard = document.createElement("div");
  hospitalCard.setAttribute("class", "card");

  var hospitalImg = document.createElement("img");
  hospitalImg.setAttribute("src", "images/hosptal.jpg");
  hospitalImg.setAttribute("class", "card-img-top");

  var hospitalCardBody = document.createElement("div");
  hospitalCardBody.setAttribute("class", "card-body");
  hospitalCardBody.style.overflow = "hidden";

  var b = `
    <h4 class="card-title fs-bold text-center">${hospital.hospital_name}</h4>
    <p class="card-text text-center">${hospital.address}</p>
    <hr class="mx-auto" style="height: .5px; width: 80%;">
    <div class="text-center">
    <a href="tel:${hospital.phone_No}"
    <button style="width: 49%;" type="button" class="btn btn-outline-primary mb-2">
        Call
    </button>
    </a>
    <button style="width: 49%;" type="button" class="btn btn-outline-primary mb-2">
        Directions
    </button>
</div>

<p class="card-text"> Time: ${hospital.open_time} : ${hospital.close_time}
    `;
  b += `<ul>`;

  for (let r of hospital.services) b += `<li>${r}</li>`;
  for (let r of hospital.services) b += `<li>${r}</li>`;
  for (let r of hospital.services) b += `<li>${r}</li>`;

  b += `</ul>`;

  hospitalCardBody.innerHTML = b;

  var cardFooter = document.createElement("div");
  cardFooter.setAttribute("class", "card-footer text-center");
  cardFooter.innerHTML = `
  <a href="${hospital.website_link}">
  <button style="width: 100%;" type="button" class="btn btn-outline-primary">
  Book Appointment/ Know More
</button>
</a>
  `;

  hospitalCard.appendChild(hospitalImg);
  hospitalCard.appendChild(hospitalCardBody);
  hospitalCard.appendChild(cardFooter);
  hospitalBlock.appendChild(hospitalCard);

  hospitalList.appendChild(hospitalBlock);
}
