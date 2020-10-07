// DISPLAY ALL ENTRIES
function getAllKnjiga() {
	var bibliotekaUrl = "http://localhost:8080/knjiga";
    var httprequest = new XMLHttpRequest();
    
    httprequest.onreadystatechange = function () {
    	if (this.readyState == 4 && this.status == 200) {    	
    		var readData = JSON.parse(this.responseText);
        	var newRow = "";
  		
        	readData.forEach(function(read){
        		newRow += "<tr>"
        		+ "<td>" + read.id + "</td>"
        		+ "<td>" + read.isbn + "</td>"
			    + "<td>" + read.naslov + "</td>"
			    + "<td>" + read.autor + "</td>"
			    + "<td>" + read.kategorija + "</td>"
			    + "<td>" + read.godina_izdanja + "</td>"
			    + "<td>" + read.izdavacka_kuca + "</td>"
			    + "<td>" + read.tiraz + "</td>"
			    + "<td class='reB'>" + '<i class="fas fa-trash-alt" onclick="deleteKnjiga(this)"></i>' + "</td>"
		        + "<td class='reB'>" + '<i class="fas fa-edit" onclick="onEdit(this)"></i>' + "</td>"
		        + "</tr>"			     
	            });	        	
	        document.getElementById("knjiga").innerHTML = newRow ; 	             
    	}
	}
	httprequest.open("GET", bibliotekaUrl , true);
	httprequest.send();
}

//DELETE BOOK BY ID
function deleteKnjiga(oButton) {
	var activeRow = oButton.parentNode.parentNode.cells[0].innerHTML;
    var bibliotekaUrl = "http://localhost:8080/knjiga/" + activeRow;
    var httprequest = new XMLHttpRequest();
    
    if(confirm('Potvrdite brisanje.')){
	    httprequest.onreadystatechange = function () {
	        if (httprequest.readyState == 4 && this.status == 200) {
	            document.getElementById("deleteKnjiga").innerHTML = httprequest.responseText + " - brisanje knjige iz baze je uspesno."; 
	        }
	    }	    
	    location.reload();
	    httprequest.open("DELETE", bibliotekaUrl, true);
	    httprequest.send();
    }
}

// ADD NEW TO DATABASE
function createKnjiga() {
	
    var bibliotekaUrl = "http://localhost:8080/knjiga";     
    
    var jsonData = {};
	    jsonData.isbn = document.getElementById('isbn').value;
	    jsonData.naslov= document.getElementById('naslov').value;
	    jsonData.autor= document.getElementById('autor').value;
	    jsonData.kategorija= document.getElementById('kategorija').value;
	    jsonData.godina_izdanja= document.getElementById('godina_izdanja').value;
	    jsonData.izdavacka_kuca= document.getElementById('izdavacka_kuca').value;
	    jsonData.tiraz= document.getElementById('tiraz').value;
    
    var json = JSON.stringify(jsonData);
    
    var httprequest = new XMLHttpRequest();
    httprequest.onreadystatechange = function(){
    	if(httprequest.readyState == 4 && 200){
    		document.getElementById('createKnjiga').innerHTML = httprequest.responseText;
    	}
    }

    httprequest.open("POST", bibliotekaUrl, true);
    httprequest.setRequestHeader("Content-Type", "application/json");
    httprequest.send(json);    
    alert('Nova knjiga je dodata u bazu!')
    resetFormKnjiga();
}

/* 
 * Defining a function to validate ISBN. If ISBN is in base
 * no new book is added and msg is displayed
 * 
 */
function validateKnjiga(){
	var bibliotekaUrl = "http://localhost:8080/knjiga";
    var httprequest = new XMLHttpRequest(); 
    var isbn_provera = document.knjigaForm.isbn.value;
	
    httprequest.onreadystatechange = function () {
    	if (this.readyState == 4 && this.status == 200) {    	
    		var readData = JSON.parse(this.responseText);
    		var x = false;
    		
        	readData.forEach(function(read){
        		if(isbn_provera == read.isbn) {
        			alert('Knjiga sa datim ISBN vec postoji u bazi!')
        			x = true;
        		}      			
	            });	  
        	if(x == false){
        		// Get values of form elements
    			var isbn = document.knjigaForm.isbn.value;
    			var naslov = document.knjigaForm.naslov.value;
    			var autor = document.knjigaForm.autor.value;
    			var kategorija= document.knjigaForm.kategorija.value;
    			var godina_izdanja = document.knjigaForm.godina_izdanja.value;
    			var izdavacka_kuca = document.knjigaForm.izdavacka_kuca.value;
    			var tiraz= document.knjigaForm.tiraz.value;

    			createKnjiga();
    			return true;
        	}
    	}
	}    
	httprequest.open("GET", bibliotekaUrl , true);
	httprequest.send();	
}
// RESET FORM function
function resetFormKnjiga() {
    document.getElementById("imeKnjige").value = "";
    document.getElementById("imePisca").value = "";
    document.getElementById("godinaIzdanja").value = "";
    document.getElementById("izdavac").value = "";
    document.getElementById("tiraz").value = "";
    selectedRow = null;
}

// E D I T   B O O K   F U N C T I O N S
// onEdit selects 
// updateKnjiga sends updated info to database
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("id").value = selectedRow.cells[0].innerHTML;
    document.getElementById("isbn").value = selectedRow.cells[1].innerHTML;
    document.getElementById("naslov").value = selectedRow.cells[2].innerHTML;
    document.getElementById("autor").value = selectedRow.cells[3].innerHTML;
    document.getElementById("kategorija").value = selectedRow.cells[4].innerHTML;
    document.getElementById("godina_izdanja").value = selectedRow.cells[5].innerHTML;
    document.getElementById("izdavacka_kuca").value = selectedRow.cells[6].innerHTML;
    document.getElementById("tiraz").value = selectedRow.cells[7].innerHTML;
}

function updateKnjiga() {
    var id = document.getElementById("id").value;
    var bibliotekaUrl = "http://localhost:8080/knjiga/" + id;
    
    var jsonData = {};
    	jsonData.id = document.getElementById("id").value;
	    jsonData.isbn = document.getElementById("isbn").value;
	    jsonData.naslov = document.getElementById("naslov").value;
	    jsonData.autor = document.getElementById("autor").value;
	    jsonData.kategorija = document.getElementById("kategorija").value;
	    jsonData.godina_izdanja = document.getElementById("godina_izdanja").value;
	    jsonData.izdavacka_kuca = document.getElementById("izdavacka_kuca").value;
	    jsonData.tiraz = document.getElementById("tiraz").value;

    var json = JSON.stringify(jsonData);
    
    if(confirm('Potvride promenu unosa.')){
	    var httprequest = new XMLHttpRequest();
	    httprequest.onreadystatechange = function () {
	        if (httprequest.readyState == 4 && this.status == 200) {
	            document.getElementById("updateKnjiga").innerHTML = httprequest.responseText;
	        }
	    }	    
	    httprequest.open("PUT", bibliotekaUrl, true);
	    httprequest.setRequestHeader("Content-type", "application/json");
	    httprequest.send(json);	 
    }
}