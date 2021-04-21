function addStolpe(){
  number.push(inputValue);
  show();
}

function changeStolpe(){
  number.splice(barNumber - 1, 1, inputValue)
  show();
}

function removeBar(){
  number.splice(barNumber -1, 1);
  show();

}

function barKlikk(barNo){
  show();
  if (barNo == barNumber) {
   barNumber = "Ingen stolpe valgt!!";
    btnDisabled = "Disabled";
  } else {
    barNumber = barNo;
    btnDisabled = "";
  }
  show();
}