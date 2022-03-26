// hospitals = [
//   {
//     address:
//       "Yogashram, Vivekanand Hospital, Patparganj Rd, near Laxmi Nagar, Khureji Khas, Delhi, 110051",
//     close_time: "6 pm",
//     distance: "18546.6",
//     hospital_name: "Vivekanand Hospital, Delhi",
//     open_time: "7 am",
//     phone_No: "329347229",
//     services: [
//       "naturopathy",
//       "yoga",
//       "physiotherapy",
//       "acupressure",
//       "acupuncture",
//       "ayurveda",
//       "mudras",
//     ],
//     website_link: "http://www.vivekanandnaturecure.com/",
//   },
//   {
//     address: "ABES Anginnering college",
//     close_time: "4:00",
//     distance: "261",
//     hospital_name: "Bapu Nature Cure Hospital & Yogashram, Delhi",
//     open_time: "8:00",
//     phone_No: "329347229",
//     services: [
//       "therapy",
//       "naturopathy",
//       "physiotherapy",
//       "acupressure",
//       "acupuncture",
//     ],
//     website_link: "http//www.google.com",
//   },
//   {
//     address: "ABES Anginnering college",
//     close_time: "4:00",
//     distance: "27861",
//     hospital_name:
//       "Swami Parmanand Prakritik Chikitsalaya Yoga Avam Anusandhan Kendra (SPPC), Delhi",
//     open_time: "8:00",
//     phone_No: "329347229",
//     services: [
//       "Respiratory Diseases",
//       "Gastro Intestinal Diseases",
//       "Endocrine Diseases",
//       "Musculo Skeleton Diseases",
//       "Lifestyle Diseases",
//     ],
//     website_link: "http//www.google.com",
//   },
//   {
//     address: "ABES Anginnering college",
//     close_time: "4:00",
//     distance: "27861",
//     hospital_name: "Sri Sai Ayurvedic Medical College and Hospital , Aligarh",
//     open_time: "8:00",
//     phone_No: "329347229",
//     services: ["Herbal Garden", "Institution", "Hospital"],
//     website_link: "http//www.google.com",
//   },
//   {
//     address: "ABES Anginnering college",
//     close_time: "4:00",
//     distance: "27861",
//     hospital_name:
//       "Kailash Institute of Naturopathy Ayurveda & Yoga, Greater Noida, Uttar Pradesh, India",
//     open_time: "8:00",
//     phone_No: "329347229",
//     services: [
//       "Reflexology",
//       "Gymnasium",
//       "Ayurvedic medicine",
//       "Yoga",
//       "Naturopathy",
//     ],
//     website_link: "http//www.google.com",
//   },
//   {
//     address: "ABES Anginnering college",
//     close_time: "4:00",
//     distance: "27861",
//     hospital_name:
//       "Deoband Unani Medical College, Hospital & Research Centre, Saharanpur, Uttar Pradesh, India",
//     open_time: "8:00",
//     phone_No: "329347229",
//     services: ["Herbal Garden", "Institution", "Hospital"],
//     website_link: "http//www.google.com",
//   },
//   {
//     address: "ABES Anginnering college",
//     close_time: "4:00",
//     distance: "27861",
//     hospital_name: "Jivagram Center For Wellbeing, Faridabad, Haryana, India",
//     open_time: "8:00",
//     phone_No: "329347229",
//     services: [
//       "Gram",
//       "Naturopathy",
//       "Physiotherapy",
//       "Acupuncture",
//       "Therapy",
//       "Jivagram",
//       "Detox",
//     ],
//     website_link: "http//www.google.com",
//   },
//   {
//     address: "ABES Anginnering college",
//     close_time: "4:00",
//     distance: "27861",
//     hospital_name: "Jaipur Ayurveda Hospital, Jaipur, Rajasthan, India",
//     open_time: "8:00",
//     phone_No: "329347229",
//     services: [
//       "Ayurveda Panchkarma Treatment",
//       "Naturopathy",
//       "Yoga",
//       "Meditation",
//       "Lifestyle & Hormonal Diseases",
//       "Wellness",
//       "Elderly Care ",
//       "Skin and Hair care",
//       "Gastric problem",
//       "Pain Managment",
//       "Depression and Anxiety",
//       "Womens health and fertility",
//       "Obesity and Weight Loss",
//     ],
//     website_link: "http//www.google.com",
//   },
//   {
//     address: "ABES Anginnering college",
//     close_time: "4:00",
//     distance: "27861",
//     hospital_name: "AyurVAID Kalmatia, Almora, Uttarakhand, India",
//     open_time: "8:00",
//     phone_No: "329347229",
//     services: ["Kutiras", "Kriya Sala", "Amphitheatre", "Naivedya", "AyurVANA"],
//     website_link: "http//www.google.com",
//   },
//   {
//     address: "ABES Anginnering college",
//     close_time: "4:00",
//     distance: "27861",
//     hospital_name:
//       "Shri Dhanwantry Ayurvedic College & Dabur Dhanwantry Hospital, Chandigarh, Punjab, India",
//     open_time: "8:00",
//     phone_No: "329347229",
//     services: [
//       "Panchkarma Facility",
//       "Jalauka (Leech )Therapy",
//       "Kshar sutra",
//       "Operation Theatre",
//       "Labour Room & Maternity Ward",
//       "Emergency Facility",
//       "Yoga",
//       "Physiotheraphy",
//       "Radiology",
//     ],
//     website_link: "http//www.google.com",
//   },
// ];


document.addEventListener("DOMContentLoaded", getUserLocation);
var loader = document.getElementById("loader");
var hospitalList = document.getElementById("hospital-list");
var searchBar = document.getElementById("searchBar");
var userLocation = document.getElementById("userLoc")
var hospitals = []
// show(hospitals);
// console.log(hospitals);
// getUserAddress(28.489906659197814,77.50777293991058)

searchBar.addEventListener("keyup", function (e) {
  getSearchResults(e.target.value);
});

function getSearchResults(query) {
  if (query) {
    hospitalList.innerHTML = "";
    var filteredData = hospitals.filter(function (q) {
      if (q.hospital_name.includes(query) || hasService(q, query)) {
        return true;
      }
    });

    if (filteredData.length) {
      filteredData.forEach(function (q) {
        makeHospitalUI(q);
      });
    } else {
      hospitalList.innerHTML = `<h3 style="text-align:center"> No Match Found </h3>`;
    }
  } else {
    hospitalList.innerHTML = "";
    hospitals.forEach(function (q) {
      makeHospitalUI(q);
    });
  }
}


function hasService(q, query) {
  var flag = false;
  q.services.forEach(function (s) {
    if (s.includes(query)) {
      flag = true;
    }
  });
  return flag;
}

function getUserLocation() {
  loader.style.display = "inline-block";
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
  function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    getUserAddress(latitude, longitude)

    const api_url = `https://ayushservice.azurewebsites.net/getAllInfoToSend/${longitude}/${latitude}`;
    console.log(position);
    // console.log(api_url)
    getapi(api_url);
  }
}

async function getUserAddress(lat, long) {
  const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&apiKey=ef550c29b846479ea69d61ea4c6cdc7f`
  const res = await fetch(url)

  var add = await res.json()
  if (res) {
    var address = add.features[0].properties;
    console.log(address.address_line1 + " " + address.city + " " + address.country);
    if (address.address_line1)
      userLocation.innerHTML = `${address.address_line1},`
    if (address.city)
      userLocation.innerHTML += ` ${address.city},`
    if (address.country) {
      userLocation.innerHTML += ` ${address.country}`
    }
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
    loader.style.display = "none";
    show(data);
  }
}

// Function to define innerHTML for HTML table
function show(data) {
  data.forEach((hospital) => {
    hospitals.push(hospital)
    makeHospitalUI(hospital);
  });
}

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
    <p style="margin-top: 0; margin-bottom: 0;" class="card-text text-center"> Time:  ${hospital.open_time} to ${hospital.close_time} 
    <h4 style="margin-top: 0;" class="text-center">Distance: ${(hospital.distance / 1000).toFixed(
    2
  )} Km</h4>
    `;
  b += `<ul>`;

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


$('#queryForm').submit(function (e) {
  e.preventDefault();
  var Alert = document.getElementById("queryFormAlert");
  Alert.innerHTML = "";
  var button = document.getElementById("queryFormButton");
  var ID = "AH" + Date.now();
  var Name = $('#name').val();
  var Cno = $('#cno').val();
  var email = $('#email').val();
  var address = $('#address').val();
  var query = $('#message').val();
  if (Name != "" && email != "" && address != "" && query != "" && Cno != "") {
    button.innerHTML = `Loading.. <i class="fas fa-spinner fa-spin"></i>`;
    const Data = {
      ID: ID,
      Name: Name,
      Cno: Cno,
      Email: email,
      Add: address,
      Query: query,
      Status: "Submitted",
      Date: new Date().toLocaleDateString()
    };
    firebase.database().ref('Query/' + ID).set(Data);
    AlertText = `
  <div class="alert alert-warning alert-dismissible fade show text-center" role="alert">
    <strong>Query Registerted!</strong> <br>Dear User Your Query is Registered with <b>Query ID : ${ID}</b><br>
    Please Track using Track Form
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
    Alert.innerHTML = AlertText;
    button.innerHTML = `Submitted`;
    $('#queryForm')[0].reset();
  }
  else {
    AlertText = `
    <div class="alert alert-warning alert-dismissible fade show text-center" role="alert">
      <strong>Missing !</strong> Some fields are missing.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
    Alert.innerHTML = AlertText;
  }
});

function searchQuery() {
  document.getElementById("contact").classList.add("d-none");
  document.getElementById("tcontact").classList.remove("d-none");
}
function registerQuery() {
  document.getElementById("tcontact").classList.add("d-none");
  document.getElementById("contact").classList.remove("d-none");
}

function trackQuery() {
  var QueryID = $('#queryID').val();
  QueryID = QueryID.toUpperCase();
  var Alert = document.getElementById("querySFormAlert");
  Alert.innerHTML = "";
  if (QueryID != "") {
    // Search Query
    firebase.database().ref('Query/' + QueryID).once('value').then(function (snapshot) {
      data = snapshot.val();
      if (data == null) {
        AlertText = `
        <div class="alert alert-warning alert-dismissible fade show text-center" role="alert">
          <strong>Not Found !</strong> Invalid Query ID.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
        Alert.innerHTML = AlertText;
      }
      else {
        AlertText = `
        <div class="alert alert-warning alert-dismissible fade show text-center" role="alert">
          <strong>Result Found !</strong> <br>Current Status : ${data.Status}</b>.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
        Alert.innerHTML = AlertText;
      }
    });
  }
  else {
    AlertText = `
    <div class="alert alert-warning alert-dismissible fade show text-center" role="alert">
      <strong>Missing !</strong>Enter a Query ID First.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
    Alert.innerHTML = AlertText;

  }
}
