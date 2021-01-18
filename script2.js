var imc = 0;
    
function mostrarImc(){
    var resultado = calcular();
        
    document.getElementById("calculoImc").innerHTML = `
    <b>${resultado}</b>
    `
    if (imc <= 18){
        alert("Tenés bajo peso");
    }
    
    else if (imc > 18, imc <= 25){
        alert("Tenés peso saludable");
    }
    
    else {
        alert("Tenés sobrepeso");
    }
    
    }
    
function calcular(peso, altura){
        
    var peso = Number(prompt("Ingresá tu peso en KG"));

    var altura = Number(prompt("Ingresá tu altura en Mts (el punto se usa como coma)"));

    var resultado = peso / Math.pow(Number(altura) , 2);
        
    imc = Math.round(resultado);
        
    return imc;
}


