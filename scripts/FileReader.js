var filePath = "https://markmissi.github.io/doqqacalc/res/damage/Damage_T.Gohan.csv";

function loadFile(path) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", path, true);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }
  return result;
};


// Once the page loads
window.onload = function() {

	// Load the damage values in CSV format
	var damageValuesCSV = loadFile(filePath);

	// Parse the result into an array
	var parsedResult = Papa.parse(
		damageValuesCSV, 
		{
			header: true,
			skipEmptyLines: true
		});

	var damageData = parsedResult['data'];

	console.log(damageData[0]);

};