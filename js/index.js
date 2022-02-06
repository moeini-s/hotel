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