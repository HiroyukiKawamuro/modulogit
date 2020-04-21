function trocarDiv(nome) {
    var area=document.getElementById("area");
    var texto = prompt("Qual seu sobrenome ?");
    area.innerHTML = nome+" "+texto;
}

function adicionarIngredientes() {
    var ing=document.getElementById("ingredientes").value;
    var listahtml=document.getElementById("Lista").innerHTML;
    listahtml=listahtml +"<li>"+ing+"</li>";
    document.getElementById("Lista").innerHTML = listahtml;
}

function somar(){
    var campo1 = parseInt(document.getElementById("campo1").value);
    var campo2 = parseInt(document.getElementById("campo2").value);
    var soma = campo1+campo2;
    alert("soma = "+ soma);
}

function validar(){
    var valor = document.getElementById("numero").value;
    if (valor.length != 2){
        alert("Erro - o número só pode ter 2 dígitos");
        return false;
    }else{
        return true;
    }
}
