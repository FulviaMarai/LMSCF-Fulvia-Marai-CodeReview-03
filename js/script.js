	

	function calculateInsurance(){

			var name = document.getElementById("userName").value;	
			var ageS = document.getElementById("userAge").value;	
			var carS = document.getElementById("userCar").value;	

			var age = parseInt(ageS, 10);
			var car= parseInt(carS, 10);

 			var country = document.getElementById("selectCountry").value;

switch (country) {

   case 'austria':
       var insur = Math.floor(car * 100 / age + 50);
       break;

   case 'hungary':
       	var insur = Math.floor(car*120/age +100);
       break;

   case 'greece':
         var insur = Math.floor(car*150 / age + 3 +50);
       break;

   default:
 		 "Mistakes were done: please try again";
       break;
}

	document.getElementById("printedGreen").innerHTML = name + ", your insurance costs "+ insur + " €";
}

var elementNode = document.getElementById("buttonStart");
      elementNode.onclick = calculateInsurance;