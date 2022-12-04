//Array mit den Zahlen die auf Teilbarkeit zum prüfen sind 
const numbers = [ 2, 3, 5, 7, 11, 13,17];




		


//Erstellt die Zahlen für die Tabelle
function zahlenerstellen(){	
	
	 var neuezahlen = document.getElementsByClassName("zahl");	
	 var spaltenzahlen = numbers;
	 for ( i = 0; i < numbers.length; i++) {
    neuezahlen[i].innerHTML= spaltenzahlen[i];
	
	
	}
}



//Prüft die Benutzereingabe ob die Zahl teilbar ist und gibt sie in der HTML -Tabelle mit Symbolen aus.

function starten(){
	
	 var zahleingabe = parseInt(nummer.value);
	 var newnummbers = numbers;
	 var neuesergebnis = document.getElementsByClassName("ergebnis");
	
	
	for ( i = 0; i < numbers.length; i++){
	
		if(zahleingabe % numbers[i] === 0)
			
			neuesergebnis[i].innerHTML =  "✔️";
		
		  else if (zahleingabe % numbers[i] >= 1 )
			neuesergebnis[i].innerHTML =  " &#10060;";
	      	
	}
    
 
}

	
	
 
	 
	 
	 
		
	
	
	
