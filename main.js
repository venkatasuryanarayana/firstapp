(function() {

  function loadJSON(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
        callback(rawFile.responseText);
      }
    }
    rawFile.send();
  }

  //usage:
  loadJSON("data.json", function(text){
    let data = JSON.parse(text);
     console.log(data);
    basics(data.basics);
    nextele(data.next);

});


var main = document.getElementById("main");
var left = document.createElement("div");
left.classList.add("left");
var bio = document.createElement("div");
bio.classList.add("bio");
 var img=document.createElement("img");
 img.src="download.jpg";
 bio.appendChild(img);
var example = document.createElement("div");
function basics(basics){
example.classList.add("name");
example.textContent=basics.name;
var name1=document.createElement("div");
name1.classList.add("name1");
name1.textContent=basics.designation;
bio.appendChild(example);
bio.appendChild(name1);

left.appendChild(bio);
// main.appendChild(left);



var sidemenu=document.createElement("div");
sidemenu.classList.add("sidemenu");
sidemenu.textContent=basics.goal;

var myphonenum=document.createElement("div");
myphonenum.classList.add("myphone");
myphonenum.textContent=basics.phone;
sidemenu.appendChild(myphonenum);

var email=document.createElement("div");
email.classList.add("email");
email.textContent=basics.email;
sidemenu.appendChild(email);

var lang=document.createElement("div");
lang.classList.add("Language");
lang.textContent=basics.Languages;
sidemenu.appendChild(lang);
left.appendChild(sidemenu);
}



function next(next){

  var right = document.createElement("div");
  right.classList.add("right");
  var background=document.createElement("div");
  background.classList.add("background");
  background.textContent=next.Address;
  right.appendChild(background);

}

main.appendChild(left);


}());
