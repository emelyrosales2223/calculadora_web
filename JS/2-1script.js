var historial = [];


function insertar(num){
    var value = $('.display').val();
    $('.display').val(value + num);
}

function c(){
    $('.display').val('');
    $('.hist').val('');
    document.getElementById('hist').innerHTML = "";
    for (let i = historial.length; i > 0; i--) {
        historial.pop();
      }
      console.log(historial);
    
}

function del(){
    var value = $('.display').val();
    $('.display').val(value.substring(0,value.length-1));
  
}

function igual(){

    historial.push($('.display').val());
    $('.display').val(eval($('.display').val()));
    historial.push("=" + $('.display').val());
    imprimirHistorial();
    historial.push(", ");

}

function imprimirHistorial(){
    let hist ="";
    for (let i = 0; i < historial.length; i++){
        hist = hist + historial[i].toString();
    }
    document.getElementById('hist').innerHTML = hist;

}

