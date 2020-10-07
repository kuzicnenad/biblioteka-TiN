// DISPLAY ALL ENTRIES
function getAllClan() {
	var bibliotekaUrl = "http://localhost:8080/clan";
    var httprequest = new XMLHttpRequest();
    
    httprequest.onreadystatechange = function () {
    	if (this.readyState == 4 && this.status == 200) {    	
    		var readData = JSON.parse(this.responseText);
        	var newRow = "";
  		
        	readData.forEach(function(read){
        		newRow += "<tr>"
        		+ "<td>" + read.broj_clana + "</td>"
        		+ "<td>" + read.ime + "</td>"
			    + "<td>" + read.prezime + "</td>"
			    + "<td>" + read.telefon + "</td>"
			    + "<td>" + read.datum_registracije + "</td>"
			    + "<td class='reB'>" + '<i class="fas fa-trash-alt" onclick="deleteClan(this)"></i>' + "</td>"
		        + "<td class='reB'>" + '<i class="fas fa-edit" onclick="onEdit(this)"></i>' + "</td>"
		        + "</tr>"			     
	            });	    	
	        document.getElementById("clan").innerHTML = newRow ; 	             
    	}
	}
	httprequest.open("GET", bibliotekaUrl , true);
	httprequest.send();
}

// DELETE BY ID
function deleteClan(oButton) {
	var activeRow = oButton.parentNode.parentNode.cells[0].innerHTML;
    var bibliotekaUrl = "http://localhost:8080/clan/" + activeRow;
    var httprequest = new XMLHttpRequest();
    
    if(confirm('Potvrdite brisanje.')){
	    httprequest.onreadystatechange = function () {
	        if (httprequest.readyState == 4 && this.status == 200) {
	            document.getElementById("deleteClan").innerHTML = httprequest.responseText + " - brisanje knjige iz baze je uspesno."; 
	        }
	    }
	    location.reload();
	    httprequest.open("DELETE", bibliotekaUrl, true);
	    httprequest.send();
    }
}

// ADD NEW TO DATABASE
function createClan() {
	
    var bibliotekaUrl = "http://localhost:8080/clan";     
    
    var jsonData = {};
	    jsonData.ime= document.getElementById('ime').value;
	    jsonData.prezime= document.getElementById('prezime').value;
	    jsonData.telefon= document.getElementById('telefon').value;
	    jsonData.datum_registracije= document.getElementById('datum_registracije').value;
	   
    var json = JSON.stringify(jsonData);
    
    var httprequest = new XMLHttpRequest();
    httprequest.onreadystatechange = function(){
    	if(httprequest.readyState == 4 && 200){
    		document.getElementById('createClan').innerHTML = httprequest.responseText;
    	}
    }

    httprequest.open("POST", bibliotekaUrl, true);
    httprequest.setRequestHeader("Content-Type", "application/json");
    httprequest.send(json);
    alert('Novi clan je dodat u bazu!')
    resetFormClan();
}

/* Defining a functions to validate form.
 * 
 * function yet to be implemented for proper form validation
 * used to send new book after HTML5 validation with pattern tags
 */
function validateClan(){
	// Get values of form elements
	var ime= document.knjigaForm.ime.value;
	var prezime= document.knjigaForm.prezime.value;
	var telefon= document.knjigaForm.telefon.value;
	var datum_registracije= document.knjigaForm.datum_registracije.value;

	createClan();
	return true;
	
}
// RESET FORM FUNCTION
function resetFormClan() {
    document.getElementById("broj_clana").value = "";
    document.getElementById("ime").value = "";
    document.getElementById("prezime").value = "";
    document.getElementById("telefon").value = "";
    document.getElementById("datum_registracija").value = "";
    selectedRow = null;
}

// E D I T   B O O K   F U N C T I O N S
// onEdit selects 
// updateClan sends updated info to database
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("broj_clana").value = selectedRow.cells[0].innerHTML;
    document.getElementById("ime").value = selectedRow.cells[1].innerHTML;
    document.getElementById("prezime").value = selectedRow.cells[2].innerHTML;
    document.getElementById("telefon").value = selectedRow.cells[3].innerHTML;
    document.getElementById("datum_registracije").value = selectedRow.cells[4].innerHTML;
}

function updateClan() {
    var broj_clana = document.getElementById("broj_clana").value;
    var bibliotekaUrl = "http://localhost:8080/clan/" + broj_clana;
    
    var jsonData = {};
    	jsonData.broj_clana = document.getElementById("broj_clana").value;
	    jsonData.ime = document.getElementById("ime").value;
	    jsonData.prezime = document.getElementById("prezime").value;
	    jsonData.telefon = document.getElementById("telefon").value;
	    jsonData.datum_registracije = document.getElementById("datum_registracije").value;
	  
    var json = JSON.stringify(jsonData);
    
    if(confirm('Potvride promenu unosa.')){
	    var httprequest = new XMLHttpRequest();
	    httprequest.onreadystatechange = function () {
	        if (httprequest.readyState == 4 && this.status == 200) {
	            document.getElementById("updateClan").innerHTML = httprequest.responseText;
	        }
	    }	    
	    httprequest.open("PUT", bibliotekaUrl, true);
	    httprequest.setRequestHeader("Content-type", "application/json");
	    httprequest.send(json);	    
    }
}