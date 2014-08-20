$(document).ready(function() {
	createHerbCleanTable();
	createDragonhideTanTable();
	createSuperheatTable();
});

function createHerbCleanTable() {
	var herbs = [["Guam", 1], ["Tarromin", 5], ["Marrentill", 9], ["Harralander", 20], 
			["Ranarr", 25], ["Toadflax", 30], ["Spirit Weed", 35], ["Irit", 40],
			["Wergali", 41], ["Avantoe", 48], ["Kwuarm", 54], ["Snapdragon", 59], 
			["Cadantine", 65], ["Lantadyme", 67], ["Dwarf Weed", 70], ["Torstol", 75],
			["Fellstalk", 91]];
	var col_Names = ["Herb", "Level", "Grimy Price", "Clean Price", 
			"Profit (margin)", "Profit Per Hour (5k)"];

	// Begin creating the table
	$("#herb_Clean").append("<table></table>");

	var rows = new Array();
	rows[0] = "<tr>";
	var r = 1;
	// Create labels row
	for (var i = 0; i < col_Names.length; i++, r++) {
		rows[r] = "<td>" + col_Names[i] + "</td>"
	}
	rows[r] = "</tr>";
	r++;

	// Create table content
	for (var i = 0; i < herbs.length; i++, r++) {
		rows[r] = "<tr><td>" + herbs[i][0] + "</td>" + 
				"<td>" + herbs[i][1] + "</td>" +
				"<td></td>" +	// Grimy Price
				"<td></td>" + 	// Clean Price
				"<td></td>" +	// Profit 
				"<td></td>" +	// Profit Per Hour
				"</tr>";
	}
	$("#herb_Clean table").append(rows.join(''));
}

function createDragonhideTanTable() {
	var dragonhides = ["Green", "Blue", "Red", "Black", "Royal"];
	var col_Names = ["Type", "Dragonhide Price", "Dragon Leather Price", 
	"Profit (margin)", "Profit Per Hour (3.6k)"];

	// Begin creating the table
	$("#dragonhide_Tan").append("<table></table>");

	var rows = new Array();
	rows[0] = "<tr>";
	var r = 1;
	// Create labels row
	for (var i = 0; i < col_Names.length; i++, r++) {
		rows[r] = "<td>" + col_Names[i] + "</td>"
	}
	rows[r] = "</tr>";
	r++;

	// Create table content
	for (var i = 0; i < dragonhides.length; i++, r++) {
		rows[r] = "<tr><td>" + dragonhides[i] + "</td>" + 
				"<td></td>" +	// Dragonhide  Price
				"<td></td>" + 	// Dragon Leather Price
				"<td></td>" +	// Profit 
				"<td></td>" + 	// Profit Per Hour
				"</tr>";
	}
	$("#dragonhide_Tan table").append(rows.join(''));
}

function createSuperheatTable() {
	var ores = ["Rune"];
	var col_Names = ["Type", "Price", "Coal Price", "Total Coal Price", "Nature Rune Price", 
	"Profit (margin)", "Profit Per Hour"];

	// Begin creating the table
	$("#superheat").append("<table></table>");

	var rows = new Array();
	rows[0] = "<tr>";
	var r = 1;
	// Create labels row
	for (var i = 0; i < col_Names.length; i++, r++) {
		rows[r] = "<td>" + col_Names[i] + "</td>"
	}
	rows[r] = "</tr>";
	r++;

	// Create table content
	for (var i = 0; i < ores.length; i++, r++) {
		rows[r] = "<tr><td>" + ores[i] + "</td>" + 
				"<td></td>" +	// Price
				"<td></td>" + 	// Coal Price
				"<td></td>" + 	// Total Coal Price
				"<td></td>" +	// Nature Rune Price
				"<td></td>" +	// Profit 
				"<td></td>" +	// Profit Per Hour
				"</tr>";
	}
	$("#superheat table").append(rows.join(''));
}