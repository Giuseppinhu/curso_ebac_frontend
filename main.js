function validar_campos(){
  var campoA = document.getElementById("input1").value;
  var campoB = document.getElementById("input2").value;
  campoA = parseInt(campoA)
  campoB = parseInt(campoB)

  if (campoB > campoA){
    notify("O campo B é maior que o campo A.");
  } else {
    notify("Invalido.");
  }

  }

  function notify(text){
    document.getElementById("not").innerHTML = text;
  }