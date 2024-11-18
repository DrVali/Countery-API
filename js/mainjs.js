//create div class="container-fluid"
const containerEl = document.createElement("div");
containerEl.classList.add("container-fluid");
const mainHeader = document.createElement("div");
mainHeader.classList.add("header");
containerEl.append(mainHeader);
let darkLight = true;
//create div class="row"
const rowdivRow = document.createElement("div");
rowdivRow.classList.add("row");

document.body.append(containerEl);
mainHeader.append(rowdivRow);

//create div class="col-8"

const cols8 = document.createElement("div");
cols8.classList.add("col-lg-8");
cols8.classList.add("col-md-8");
cols8.classList.add("col-sm-8");

//create div class="col-4 "
const col4 = document.createElement("div");
col4.classList.add("col-lg-4");
col4.classList.add("col-md-4");
col4.classList.add("col-sm-4");
col4.classList.add("header-r");
const btnDarkmode = document.createElement("a");

btnDarkmode.classList.add("rHeader");
col4.append(btnDarkmode);
const iconDark = document.createElement("i");
iconDark.id = "darkI";
iconDark.classList.add("fa");
col4.append(iconDark);
rowdivRow.append(cols8);
rowdivRow.append(col4);
const modalDisplay = document.getElementById("myModal");

document.body.addEventListener("load", function () {
  modalDisplay.classList.toggle("noneModal");
});
//change moon or sun
if (document.body.classList.contains("dark")) {
  document.getElementById("darkI").classList.add("fa-moon-o");
  document.querySelector(".rHeader").innerHTML = "Light";
} else {
  document.getElementById("darkI").classList.add("fa-sun-o");
  document.querySelector(".rHeader").innerHTML = "Dark";
}

function darkmode() {
  document.getElementById("darkI").classList.toggle("fa-sun-o");
  document.getElementById("darkI").classList.toggle("fa-moon-o");
  document.body.classList.toggle("dark");
  document.querySelector(".header").classList.toggle("dark");
  document.getElementById("mySearch").classList.toggle("dark");
  document.querySelector(".rHeader").classList.toggle("dark");
  
  
  var spans = document.querySelectorAll('span');
  spans.forEach(span => { span.style.color = 'rgb(250, 250, 250)';});
  
  var h2Color = document.querySelectorAll('h2');
  h2Color.forEach(span => { span.style.color = 'rgb(250, 250, 250)';});
  
  
  
  if (darkLight) {
    document.querySelector(".rHeader").innerHTML = "Dark";
    darkLight = false;
    document.querySelector(".icon").classList.toggle("darkBox");
spans.forEach(span => { span.style.color = 'rgb(250, 250, 250)';});
h2Color.forEach(span => { span.style.color = 'rgb(250, 250, 250);';});

  } else {
    document.querySelector(".rHeader").innerHTML = "Light";
    darkLight = true;
    document.querySelector(".icon").classList.toggle("darkBox");
	spans.forEach(span => { span.style.color = 'rgb(250, 250, 250);';});
  h2Color.forEach(spanf => { spanf.style.color = 'rgb(250, 250, 250);';});
  boxColor.forEach(span => { span.style.background = 'var(--headerColor)';
    span.style.border='1px solid blue';
    span.style.color="blue";
  });
  } 
}

btnDarkmode.addEventListener("click", darkmode);

//create header left
const textHeader = document.createElement("p");
textHeader.innerHTML = "where in the world?";
textHeader.classList.add("lHeader");
cols8.append(textHeader);

//create don header for search and ....

const downHeader = document.createElement("div");
downHeader.classList.add("row");
containerEl.append(downHeader);

//create div class="col-8"

const col7 = document.createElement("div");
col7.classList.add("col-lg-7");
col7.classList.add("col-md-7");
col7.classList.add("col-sm-7");

//create div class="col-4 "
const cols5 = document.createElement("div");
cols5.classList.add("col-lg-5");
cols5.classList.add("col-md-5");
cols5.classList.add("col-sm-5");
cols5.classList.add("header-r");

downHeader.append(col7);
downHeader.append(cols5);

//create search box
const searchEl = document.createElement("div");
searchEl.classList.add("search");
const iconEl = document.createElement("div");
iconEl.classList.add("icon");
const inputEl = document.createElement("div");
inputEl.classList.add("input");
const inputTextSearch = document.createElement("input");
inputTextSearch.type = "text";
inputTextSearch.placeholder = "Search";
inputTextSearch.id = "mySearch";
const spanEl = document.createElement("span");
spanEl.classList.add("clear");
inputEl.append(inputTextSearch);
inputEl.append(spanEl);
searchEl.append(iconEl);
searchEl.append(inputEl);
col7.append(searchEl);

//create drop down
const dropDownEl = document.createElement("div");
dropDownEl.classList.add("dropdown");

const selectbox = document.createElement("select");
selectbox.name = "region";
selectbox.id = "region";
selectbox.classList.add("regionClss");

dropDownEl.append(selectbox);

const option1 = document.createElement("option");
option1.value = "all";
option1.innerHTML = "All contery";
option1.id = "all";
selectbox.append(option1);

const option2 = document.createElement("option");
option2.value = "Africa";
option2.innerHTML = "Africa";
option2.id = "Africa";
selectbox.append(option2);

const option3 = document.createElement("option");
option3.value = "Americas";
option3.innerHTML = "Americas";
option3.id = "Americas";
selectbox.append(option3);

const option4 = document.createElement("option");
option4.value = "Asia";
option4.innerHTML = "Asia";
option4.id = "Asia";
selectbox.append(option4);

const option5 = document.createElement("option");
option5.value = "Europe";
option5.innerHTML = "Europe";
option5.id = "Europe";
selectbox.append(option5);

const option6 = document.createElement("option");
option6.value = "Oceania";
option6.innerHTML = "Oceania";
option6.id = "Oceania";
selectbox.append(option6);

cols5.append(dropDownEl);

function closeSearch() {
  document.getElementById("mySearch").value = "";
}
searchEl.addEventListener("click", closeSearch);

//serch
const icon = document.querySelector(".icon");
const search = document.querySelector(".search");
icon.addEventListener("click", function () {
  search.classList.toggle("active");
});

//show content after select
const mainContent = document.createElement("div");
mainContent.classList.add("main-content");
containerEl.append(mainContent);

///create a box for selected option
function boxMaking(res, index) {
  //console.log("RES==>",res);

  const boxContent = document.createElement("div");
  boxContent.classList.add("box");
  mainContent.append(boxContent);

  const boxContent2 = document.createElement("div");
  boxContent2.classList.add("box-content");

  const aBox = document.createElement("a");
  aBox.classList.add("countery-pic");
  boxContent.append(aBox);

  const imgBox = document.createElement("img");
  imgBox.classList.add("images");
  imgBox.src = `${res.flags.png}`;
  imgBox.alt = "jj";
  imgBox.addEventListener("click", () => openModal(res, index));
  aBox.append(imgBox);
  boxContent.append(boxContent2);
  //imgBox.onclick=(openModal(res));

  const H2El = document.createElement("h2");
  H2El.classList.add("counter-title");
  H2El.innerHTML = `${res.name}`;
  H2El.addEventListener("click", () => openModal(res, index));
  boxContent2.append(H2El);

  const spanPop = document.createElement("span");
  spanPop.classList.add("pop");
  spanPop.classList.add("spanId");
  spanPop.innerHTML = `population:  ${res.population}`;
  boxContent2.append(spanPop);

  const spanRegion = document.createElement("span");
  spanRegion.classList.add("region");
  spanRegion.classList.add("spanId");
  spanRegion.innerHTML = `region:  ${res.region}`;
  boxContent2.append(spanRegion);

  const spancapital = document.createElement("span");
  spancapital.classList.add("capital");
  spancapital.innerHTML = `capital: ${res.capital}`;
  boxContent2.append(spancapital);
}
///////////////////////////////////////////////////////////////////////

showcountery = function (e) {
  document.querySelector(".main-content").innerHTML = "";
  //reuest on xmlHttp
  let request;
  if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
  } else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
  }
  request.open("GET", "data.json");
  request.send();
  request.addEventListener("load", function () {
    if (request.readyState == 4 && request.status == 200) {
      let result = JSON.parse(request.responseText);
      // console.log(e.target.value);

      result.map((res, index) => {
        //console.log("RES==>",res);
        if (res.region === e.target.value) boxMaking(res, index);

        if (e.target.value === "all") {
          boxMaking(res);
        }
      });
    }
  });
};

////////////////////////////////////////////////////////////////////////////////////

let selectDropDown = document.querySelector("#region");
selectDropDown.addEventListener("change", showcountery);
//////////////////////////////////////
window.addEventListener("load", function () {
  document.querySelector(".main-content").innerHTML = "";
  //reuest on xmlHttp
  let request;
  if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
  } else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
  }
  request.open("GET", "data.json");
  request.send();
  request.addEventListener("load", function () {
    if (request.readyState == 4 && request.status == 200) {
      let result = JSON.parse(request.responseText);
      // console.log(e.target.value);

      result.map((res, index) => {
        //console.log("RES==>",res);
        boxMaking(res);
      });
    }
  });
});

searchCountery = function (e) {
  document.querySelector(".main-content").innerHTML = "";
  //reuest on xmlHttp
  let request;
  if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
  } else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
  }
  request.open("GET", "data.json");
  request.send();
  request.addEventListener("load", function () {
    if (request.readyState == 4 && request.status == 200) {
      let result = JSON.parse(request.responseText);
      const toUpperSearch = e.target.value.toUpperCase();

      result.map((res, index) => {
        let response12 = res.name.toUpperCase();
        if (response12.includes(toUpperSearch)) {
          boxMaking(res, index);
        }
      });
    }
  });
};

let searchText = document.querySelector("#mySearch");
searchText.addEventListener("input", searchCountery);

//////////////////////////////////////modal create

//function openModal();

//reuest on xmlHttp

function openModal(res, index) {
  event.preventDefault();

  // console.log("RES ==>",res);
  let modals = document.getElementById("myModal");
  //modals.style.display = "block";
  const modalEl = document.createElement("div");
  modalEl.classList.add("modal");
  modalEl.id = "myModal";
  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");
  const rowmodalEl = document.createElement("div");
  rowmodalEl.classList.add("row");
  rowmodalEl.id = "row-div";
  modalEl.append(rowmodalEl);
  const modalC0l12 = document.createElement("div");
  modalC0l12.classList.add("col-lg-12");
  modalC0l12.classList.add("col-md-12");
  modalC0l12.classList.add("col-sm-12");
  rowmodalEl.append(modalC0l12);
  const modalContentmain = document.createElement("div");
  modalContentmain.classList.add("col-lg-12");
  modalContentmain.classList.add("col-md-12");
  modalContentmain.classList.add("col-sm-12");
  rowmodalEl.append(modalContentmain);
  const spanContent = document.createElement("span");
  spanContent.classList.add("close");
  spanContent.id = "close";
  spanContent.innerHTML = "&times;";

  const ContentRowmodalEl = document.createElement("div");
  ContentRowmodalEl.classList.add("row");
  ContentRowmodalEl.id = "row-div-content-modal";
  modalContent.append(ContentRowmodalEl);

  const modalContentleft = document.createElement("div");
  modalContentleft.classList.add("col-lg-6");
  modalContentleft.classList.add("col-md-6");
  modalContentleft.classList.add("col-sm-6");
  modalContentleft.id = "modal_pic";
  ContentRowmodalEl.append(modalContentleft);

  const modalContentRight = document.createElement("div");
  modalContentRight.classList.add("col-lg-6");
  modalContentRight.classList.add("col-md-6");
  modalContentRight.classList.add("col-sm-6");

  ContentRowmodalEl.append(modalContentRight);

  const rowContentRowmodalEl = document.createElement("div");
  rowContentRowmodalEl.classList.add("row");
  modalContentRight.append(rowContentRowmodalEl);

  const modalContentRightName = document.createElement("div");
  modalContentRightName.classList.add("col-lg-12");
  modalContentRightName.classList.add("col-md-12");
  modalContentRightName.classList.add("col-sm-12");
  modalContentRightName.classList.add("nameC");
  modalContentRightName.textContent = `${res.name}`;
  rowContentRowmodalEl.append(modalContentRightName);

  //native name in modal
  const modalContentRightNativeName = document.createElement("div");
  modalContentRightNativeName.classList.add("col-lg-12");
  modalContentRightNativeName.classList.add("col-md-12");
  modalContentRightNativeName.classList.add("col-sm-12");
  modalContentRightNativeName.classList.add("nameC");
  const mCRNLbl1 = document.createElement("label");
  mCRNLbl1.textContent = "Native Name :";
  mCRNLbl1.classList.add("nameC");
  modalContentRightNativeName.append(mCRNLbl1);
  const mCRNLspn1 = document.createElement("label");
  mCRNLspn1.textContent = `${res.nativeName}`;
  modalContentRightNativeName.append(mCRNLspn1);

  rowContentRowmodalEl.append(modalContentRightNativeName);

  //population in modal
  const modalCRPopulation = document.createElement("div");
  modalCRPopulation.classList.add("col-lg-12");
  modalCRPopulation.classList.add("col-md-12");
  modalCRPopulation.classList.add("col-sm-12");

  const mCRNLblP = document.createElement("label");
  mCRNLblP.textContent = "Population :";
  mCRNLblP.classList.add("nameC");
  modalCRPopulation.append(mCRNLblP);
  const mCRNLspnP = document.createElement("label");
  mCRNLspnP.textContent = `${res.population}`;
  modalCRPopulation.append(mCRNLspnP);

  rowContentRowmodalEl.append(modalCRPopulation);

  //Region in modal
  const modalCRRegion = document.createElement("div");
  modalCRRegion.classList.add("col-lg-12");
  modalCRRegion.classList.add("col-md-12");
  modalCRRegion.classList.add("col-sm-12");

  const mCRNLblR = document.createElement("label");
  mCRNLblR.textContent = "Region:";
  modalCRRegion.append(mCRNLblR);
  mCRNLblR.classList.add("nameC");
  const mCRNLspnR = document.createElement("label");
  mCRNLspnR.textContent = `${res.region}`;
  modalCRRegion.append(mCRNLspnR);

  rowContentRowmodalEl.append(modalCRRegion);

  const modalContentPic = document.createElement("img");
  modalContentPic.src = res.flags.png;
  modalContentPic.alt = "ghvh";
  modalContentleft.append(modalContentPic);

  modalEl.append(rowmodalEl);
  modalContentmain.append(modalContent);
  modalC0l12.append(spanContent);

  document.body.append(modalEl);

  modalEl.style.display = "block";
  let modal = document.getElementById("myModal");
  let x = document.getElementById("myalert");
  // Get the button that opens the modal
  const btn = document.querySelector(".modal");

  // Get the <span> element that closes the modal
  const spanClose = document.getElementById("close");

  // When the user clicks the pic, open the modal
  // btn.addEventListener("click", function() {

  //   }
  //  );

  // When the user clicks on <span> (x), close the modal
  spanClose.addEventListener("mouseup", function () {
    btn.remove();
  });

  // When the user clicks anywhere outside of the modal, close it
}
//////////////////////////////////////////////
