var filePath = "../res/damage/Damage_T.Gohan.csv";

function loadFile(path) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", path, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }
  return result;
};

window.onload(function(filePath) {

	console.log("test");
	//console.log(loadFile(filePath));

});