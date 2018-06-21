//Délaration de la fonction.
function numbers() {
  //Déclaration des variables.
  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;
  //Délaration du régex et intégration dans une variable.
  var regex = /^[0-9\.]+$/;
  //Déclaration de la condition
  if ((regex.test(firstNumber) == true) && (regex.test(secondNumber) == true))
   {
    //Conversion de la chaine de caractère en nombre entier et intégration dans une variable.
    var firstNumberInt = parseInt(firstNumber);
    //Conversion de la chaine de caractère en nombre décimal et intégration dans une variable.
    var secondNumberInt = parseFloat(secondNumber);
    //Divsion des deux nombres obtenu.
    var result = firstNumberInt / secondNumberInt;
    //Boite de dialogue avec appel des variables.
    alert(firstNumber + ' / ' + secondNumber + ' = ' + result);
   }else
    {
    //Boite de dialogue avec message d'érreur.
    alert('Entré invalide !');
    }

}
