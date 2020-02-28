var filePath = "https://markmissi.github.io/doqqacalc/res/damage/Damage_T.Gohan.csv";

function loadFile(path) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", path, true);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = Papa.parse(xmlhttp.responseText, {
			header: true,
			skipEmptyLines: true,
			preview: 3,
			complete: function(results, file) {
				console.log("Parsing complete");
			}
		});
    return result;
  }
};


// Once the page loads
window.onload = function() {

	// Load the damage values in CSV format
	var x = loadFile(filePath);

	console.log("In onload function " + x);

	// Parse the result into an array
	// var parsedResult = Papa.parse(
	// 	damageValuesCSV, 
	// 	{
	// 		header: true,
	// 		skipEmptyLines: true,
	// 		preview: 3,
	// 		complete: function(results, file) {
	// 			console.log("parsing complete: " + results);
	// 		}
	// 	});
};