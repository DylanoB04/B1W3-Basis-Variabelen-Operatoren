<html>
	<body>
	  <script> 

//1. Maak een JavaScript applicatie die de tafel van 6 uitrekent.

		for (var tafel = 6; tafel <= 6; tafel++) { //laat zien welk nummer de tafel begint.
	  	for (var i = 1; i <= 10; i++) { //min/max van de tafel.
					console.log(tafel + " * " + (i) + " = " + (tafel * (i))); //laat de berekening zien.
				}
					console.log("----------"); //einde van tafel.
																											}

//2. Maak een JavaScript applicatie die de tafel van 3 uitrekent.																							


	 	for (var tafel = 3; tafel <= 3; tafel++) { //laat zien welk nummer de tafel begint.
	  	for (var i = 1; i <= 10; i++) {	//min/max van de tafel.
					console.log(tafel + " * " + (i) + " = " + (tafel * (i))); //laat de berekening zien.
				}
					console.log("----------"); //einde van tafel.
																											}
//Vraag: hoe kun je er op een handige manier voor zorgen dat je gemakkelijk een ander tafel kunt uitrekenen, zonder dat je al te veel wijzigingen in de code moet doen?
//ant: je verandert de getallen in de for's.


//3. Berekeningen uitvoeren.

			basisgetal=Number(12); //basisgetal word automatish 12.
				tweedegetal=Number(6); //tweedegetal word automatish 6.
					derdegetal=Number(10); //derdegetal word automatish 10.
						vierdegetal=Number(5); //vierdegetal word automatish 5.
							vijfdegetal=Number(12); //vijfdegetal word automatish 12.
totaal_1 = (basisgetal + tweedegetal); //totaal_1 berekening.
totaal_2 = (totaal_1 * derdegetal); //totaal_2 berekening.
totaal_3 = (totaal_2 / vierdegetal); //totaal_3 berekening.
totaal_4 = (totaal_3 - vijfdegetal); //totaal_4 berekening.
		document.write(basisgetal + "+" + tweedegetal + "=" + totaal_1 + "<br>"); //berekening word geplaatst in pagina.
		document.write(totaal_1 + "*" + derdegetal + "=" + totaal_2 + "<br>"); //berekening word geplaatst in pagina.
		document.write(totaal_2 + "/" + vierdegetal + "=" + totaal_3 + "<br>"); //berekening word geplaatst in pagina.
		document.write(totaal_3 + "-" + vijfdegetal + "=" + totaal_4); //berekening word geplaatst in pagina.

//4. Berekeningen uitvoeren met invoer van getal.

			getal_1 = prompt("voer een getal in"); //client word gevraagd om begin getal in te voeren.
			getal_2 = prompt("voer nog een getal in"); //client moet nog een getal invoeren.
	getal_1=Number(getal_1); //antwoord word nu als een cijfer gezien.
	getal_2=Number(getal_2); //antwoord word nu als een cijfer gezien.
totaal_5 = getal_1 + getal_2 ; //totaal_5 berekening.
alert(getal_1 + "+" + getal_2 + "=" + totaal_5); //pop up van berekening komt in beeld.
		document.write(getal_2 + "+" + getal_2 + "=" + totaal_5 + "<br>"); //berekening word geplaatst in pagina.
			
			getal_3 = prompt("voer een getal in waarmee je het totaal wilt vermenigvuldigen"); //client word gevraagd om getal in te voeren om met totaal te vermenigvuldigen.
	getal_3=Number(getal_3); //getal word nu als cijfer gezien.
totaal_6 = totaal_5 * getal_3 ; //totaal_6 berekening.
alert(totaal_5 + "*" + getal_3 + "=" + totaal_6); //pop up van berekening komt in beeld.
		document.write(totaal_5 + "*" + getal_3 + "=" + totaal_6 + "<br>"); //berekening word geplaatst in pagina.

			getal_4 = prompt("voer een getal in waarmee je het totaal wilt delen"); //client word gevraagd om getal in te voeren om met totaal te delen.
	getal_4=Number(getal_4); //getal_4 word nu als cijfer gezien.
totaal_7 = totaal_6 / getal_4 ; //totaal_7 berekening.
alert(totaal_6 + "/" + getal_4 + "=" + totaal_7); //pop up van berekening komt in beeld.
		document.write(totaal_6 + "/" + getal_4 + "=" + totaal_7 + "<br>"); //berekening word geplaatst in pagina.

			getal_5 = prompt("voer een getal in wat je van het totaal wilt afhalen"); //client word gevraagd om getal in the voeren om van het totaal af te halen.
	getal_5=Number(getal_5); //getal word nu als cijfer gezien.
totaal_8 = totaal_7 - getal_5 ; //totaal_8 berekening.
alert(totaal_7 + "-" + getal_5 + "=" + totaal_8); //pop up van berekening komt in beeld.
		document.write(totaal_7 + "-" + getal_5 + "=" + totaal_8); //berekening word geplaatst in pagina.

//vraag: Wat is je opgevallen als je getallen uitrekent met een invoer mogelijkheid door de gebruiker?
//ant: dat het automatish word uitgerekent.

