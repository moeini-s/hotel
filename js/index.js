/* Search Box-------------------------------------------------*/
function openSearchBox(){
    document.getElementById("searchBox").style.height="100%";
}
function closeSearchBox(){
    document.getElementById("searchBox").style.height="0";
}

/* SideNav-------------------------------------------------*/
function openSideNav(){
  document.getElementById("sideNav").style.width="30rem";
}
function closeSideNav(){
  document.getElementById("sideNav").style.width="0";
}
/* DropDwon menu in sideNav -------------------------------------------------*/
var acc = document.getElementsByClassName("accodrionDropDown");
for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.getElementsByClassName("accodrionDropDown__content")[0];
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
  });
}

/* Facilities Tab-------------------------------------------------*/
function openTab(event,id){
  tablinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  let tabs=document.getElementsByClassName("tab-content");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";  
  }
  document.getElementById(id).style.display="flex";
  event.currentTarget.className += " active";
}