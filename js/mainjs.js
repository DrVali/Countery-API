
window.onload =function (){

    //create div class="container-fluid"
    const containerEl =document.createElement('div');
    containerEl.classList.add("container-fluid");
    const mainHeader =document.createElement("div");
    mainHeader.classList.add("header");
    containerEl.append(mainHeader);

//create div class="row"
    const rowdivRow =document.createElement("div");
    rowdivRow.classList.add("row");
    
    document.body.append(containerEl);
    mainHeader.append(rowdivRow);

    
 //create div class="col-8"

    const cols8 =document.createElement("div");
    cols8.classList.add("col-lg-8");
    cols8.classList.add("col-md-8");
    cols8.classList.add("col-sm-8");
    
    //create div class="col-4 "
    const col4 =document.createElement("div");
    col4.classList.add("col-lg-4");
    col4.classList.add("col-md-4");
    col4.classList.add("col-sm-4");
    col4.classList.add("header-r");
    const btnDarkmode=document.createElement("a");
    btnDarkmode.innerHTML="Dark";
    btnDarkmode.classList.add("rHeader");
    col4.append(btnDarkmode);
    const iconDark =document.createElement("i");
    iconDark.id="darkI"
    iconDark.classList.add("fa");  
    col4.append(iconDark);
    rowdivRow.append(cols8);
    rowdivRow.append(col4);
  
    

           //change moon or sun
    if(document.body.classList.contains("dark")){
        document.getElementById("darkI").classList.add("fa-sun-o");
    }
    else
    document.getElementById("darkI").classList.add("fa-moon-o");

    
    function darkmode(){
        document.getElementById("darkI").classList.toggle("fa-sun-o");
        document.getElementById("darkI").classList.toggle("fa-moon-o");
        document.body.classList.toggle("dark");
         } 
      btnDarkmode.addEventListener("click",darkmode);


      //create header left
   const textHeader=document.createElement("p");
   textHeader.innerHTML="where in the world?";
   textHeader.classList.add("lHeader");
   cols8.append(textHeader);
  
    


 //create don header for search and ....

   const downHeader= document.createElement("div");
   downHeader.classList.add("row");
   containerEl.append(downHeader);

//create div class="col-8"

const col7 =document.createElement("div");
col7.classList.add("col-lg-7");
col7.classList.add("col-md-7");
col7.classList.add("col-sm-7");


//create div class="col-4 "
const cols5 =document.createElement("div");
cols5.classList.add("col-lg-5");
cols5.classList.add("col-md-5");
cols5.classList.add("col-sm-5");
cols5.classList.add("header-r");

downHeader.append(col7);
downHeader.append(cols5);


//create search box
  const searchEl=document.createElement("div");
   searchEl.classList.add("search");
   const iconEl =document.createElement("div");
   iconEl.classList.add("icon");
   const inputEl =document.createElement("div");
   inputEl.classList.add("input");
   const inputTextSearch = document.createElement("input");
   inputTextSearch.type="text";
   inputTextSearch.placeholder="Search";
   inputTextSearch.id="mySearch";
   const spanEl=document.createElement("span");
   spanEl.classList.add("clear");
   inputEl.append(inputTextSearch);
   inputEl.append(spanEl);
   searchEl.append(iconEl);
   searchEl.append(inputEl);
   col7.append(searchEl);
   

   //create drop down
   const dropDownEl=document.createElement("div");
   dropDownEl.classList.add("dropdown");  
    
    const selectbox=document.createElement("select");
    selectbox.name="region";
    selectbox.id="region";
    selectbox.classList.add("regionClss");

    dropDownEl.append(selectbox);

    const option1=document.createElement("option");
    option1.value="select a Region";
    option1.innerHTML="";
    option1.id="select a Region";
    option1.style.display="none";
    selectbox.append(option1);

    const option2=document.createElement("option");
    option2.value="Africa";
    option2.innerHTML="Africa";
    option2.id="Africa";
    selectbox.append(option2);

   
    const option3=document.createElement("option");
    option3.value="America";
    option3.innerHTML="America";
    option3.id="America";
    selectbox.append(option3);

    
    const option4=document.createElement("option");
    option4.value="Asia";
    option4.innerHTML="Asia";
    option4.id="Europe";
    selectbox.append(option4);


    
    const option5=document.createElement("option");
    option5.value="Europe";
    option5.innerHTML="Europe";
    option5.id="Europe";
    selectbox.append(option5);
    

    const option6=document.createElement("option");
    option6.value="Oceania";
    option6.innerHTML="Oceania";
    option6.id="Oceania";
    selectbox.append(option6);

  cols5.append(dropDownEl);

   function closeSearch(){
    document.getElementById('mySearch').value='';
   }
   searchEl.addEventListener("click", closeSearch);



//serch 
  const icon= document.querySelector('.icon');
  const search= document.querySelector('.search');
    icon.addEventListener("click", function(){
         search.classList.toggle('active');
    }
    );
    


    let request;
    if(window.XMLHttpRequest) { request= new XMLHttpRequest(); }
    else { request = new ActiveXObject("Microsoft.XMLHTTP"); }
    request.open('GET', 'data.json') ;
    
    request.send();

 request.onreadystatechange=function (){
    if (request.readyState == 4 && request.status == 200) {
        console.log("ghghj");
        let result= request.responseText;
    }
}

    }
    