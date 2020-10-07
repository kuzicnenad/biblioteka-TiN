// DISPLAY ALL ENTRIES
function getAllZaduzenja() {
	var bibliotekaUrl = "http://localhost:8080/zaduzenje";
    var httprequest = new XMLHttpRequest();
    
    httprequest.onreadystatechange = function () {
    	if (this.readyState == 4 && this.status == 200) {    	
    		var readData = JSON.parse(this.responseText);
        	var newRow = "";
  		
        	readData.forEach(function(read){
        		newRow += "<tr>"
        		+ "<td>" + read.zaduzenje_ID + "</td>"
        		+ "<td>" + read.broj_clana + "</td>"
			    + "<td>" + read.isbn_knjige + "</td>"
			    + "<td>" + read.knjiga_zaduzena + "</td>"
			    + "<td>" + read.knjiga_razduzena + "</td>"
			    + "<td class='reB'>" + '<i class="fas fa-trash-alt" onclick="deleteZaduzenje(this)"></i>' + "</td>"
		        + "<td class='reB'>" + '<i class="fas fa-edit" onclick="onEdit(this)"></i>' + "</td>"
		        + "</tr>"			     
	            });	        	
	        document.getElementById("zaduzenje").innerHTML = newRow ; 	             
    	}
	}
	httprequest.open("GET", bibliotekaUrl , true);
	httprequest.send();
}

// DELETE BY ID
function deleteZaduzenje(oButton) {
	var activeRow = oButton.parentNode.parentNode.cells[0].innerHTML;
    var bibliotekaUrl = "http://localhost:8080/zaduzenje/" + activeRow;
    var httprequest = new XMLHttpRequest();
    
    if(confirm('Potvrdite brisanje.')){
	    httprequest.onreadystatechange = function () {
	        if (httprequest.readyState == 4 && this.status == 200) {
	            document.getElementById("deleteZaduzenje").innerHTML = httprequest.responseText + " - brisanje knjige iz baze je uspesno."; 
	        }
	    }
	    location.reload();
	    httprequest.open("DELETE", bibliotekaUrl, true);
	    httprequest.send();
    }
}

// ADD NEW TO DATABASE
function createZaduzenje() {
	
    var bibliotekaUrl = "http://localhost:8080/zaduzenje";     
    
    var jsonData = {};
	    jsonData.broj_clana= document.getElementById('broj_clana').value;
	    jsonData.isbn_knjige= document.getElementById('isbn_knjige').value;
	    jsonData.knjiga_zaduzena= document.getElementById('knjiga_zaduzena').value;
	    jsonData.knjiga_razduzena= document.getElementById('knjiga_razduzena').value;
	  
    var json = JSON.stringify(jsonData);
    
    var httprequest = new XMLHttpRequest();
    httprequest.onreadystatechange = function(){
    	if(httprequest.readyState == 4 && 200){
    		document.getElementById('createZaduzenje').innerHTML = httprequest.responseText;
    	}
    }

    httprequest.open("POST", bibliotekaUrl, true);
    httprequest.setRequestHeader("Content-Type", "application/json");
    httprequest.send(json);
    alert('Novo zaduzenje je dodato u bazu!')
    resetFormZaduzenje();
}

/* 
 * Function to validate CLAN ID, if broj_clan is not in database
 * proper message is displayed.
 * 
 */
function validateZaduzenje(){
	var bibliotekaUrl = "http://localhost:8080/clan";
    var httprequest = new XMLHttpRequest(); 
    var broj_clana_provera = document.knjigaForm.broj_clana.value;
    
    httprequest.onreadystatechange = function () {
    	if (this.readyState == 4 && this.status == 200) {    	
    		var readData = JSON.parse(this.responseText);
    		var x = false;
    		
        	readData.forEach(function(read){
        		if(broj_clana_provera == read.broj_clana) {
        			// Get values of form elements
        			var broj_clana = document.knjigaForm.broj_clana.value;
        		    var isbn_knjige = document.knjigaForm.isbn_knjige.value;
        			var knjiga_zaduzena= document.knjigaForm.knjiga_zaduzena.value;
        			var knjiga_razduzena = document.knjigaForm.knjiga_razduzena.value;        			
        			
        			createZaduzenje();        			
        			return true;
        		}      			
	            });	  
        	if(x == false){
        		alert('Clan ne postoji! Unesite ispravan ID.')
        	}
    	}
	}    
	httprequest.open("GET", bibliotekaUrl , true);
	httprequest.send();
}

// RESET FORM function
function resetFormZaduzenje() {
    document.getElementById("zaduzenje_ID").value = "";
    document.getElementById("broj_clana").value = "";
    document.getElementById("isbn_knjige").value = "";
    document.getElementById("knjiga_zaduzena").value = "";
    document.getElementById("knjiga_razduzena").value = "";
    selectedRow = null;
}

// E D I T	 F U N C T I O N S
// onEdit selects 
// updateZaduzenje sends updated informations to database
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("zaduzenje_ID").value = selectedRow.cells[0].innerHTML;
    document.getElementById("broj_clana").value = selectedRow.cells[1].innerHTML;
    document.getElementById("isbn_knjige").value = selectedRow.cells[2].innerHTML;
    document.getElementById("knjiga_zaduzena").value = selectedRow.cells[3].innerHTML;
    document.getElementById("knjiga_razduzena").value = selectedRow.cells[4].innerHTML;
}

function updateZaduzenje() {
    var zaduzenje_ID = document.getElementById("zaduzenje_ID").value;
    var bibliotekaUrl = "http://localhost:8080/zaduzenje/" + zaduzenje_ID;
    
    var jsonData = {};
    	jsonData.zaduzenje_ID = document.getElementById("zaduzenje_ID").value;
	    jsonData.broj_clana = document.getElementById("broj_clana").value;
	    jsonData.isbn_knjige = document.getElementById("isbn_knjige").value;
	    jsonData.knjiga_zaduzena = document.getElementById("knjiga_zaduzena").value;
	    jsonData.knjiga_razduzena = document.getElementById("knjiga_razduzena").value;

    var json = JSON.stringify(jsonData);
    
    if(confirm('Potvride promenu unosa.')){
	    var httprequest = new XMLHttpRequest();
	    httprequest.onreadystatechange = function () {
	        if (httprequest.readyState == 4 && this.status == 200) {
	            document.getElementById("updateZaduzenje").innerHTML = httprequest.responseText;
	        }
	    }	    
	    httprequest.open("PUT", bibliotekaUrl, true);
	    httprequest.setRequestHeader("Content-type", "application/json");
	    httprequest.send(json);	    
    }
}