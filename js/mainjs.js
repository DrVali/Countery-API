
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
    rowdivRow.classList.add("header");
    document.body.append(containerEl);
    mainHeader.append(rowdivRow);

    
 //create div class="col-8"

    const cols8 =document.createElement("div");
    cols8.classList.add("col-lg-8");
    cols8.classList.add("col-md-8");
    cols8.classList.add("col-sm-8");
    
    //create div class="col-4"
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

    

   const textHeader=document.createElement("p");
   textHeader.innerHTML="where in the world?";
   textHeader.classList.add("lHeader");
   cols8.append(textHeader);
  
    








   
    
    
    
    }
    