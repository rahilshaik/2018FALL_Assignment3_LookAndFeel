//To set current tab active
function changeTab(evt, galaxy) {
    var i, tabcontent, tablinks;
    //Get the content of all the tabs
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    //set current tab
    document.getElementById(galaxy).style.display = "block";
    evt.currentTarget.className += " active";
  }