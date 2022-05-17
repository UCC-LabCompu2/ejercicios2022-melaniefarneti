/**
 * conversion de unidades de metros, yardas, pies y unidades
 * @param (string) id = el id de los metros, yardas, pies y pulgadas
 * @param (number) valor = el valor de los metros, yardas, pies y pulgadas
 */

function cambiarUnidades(id, valor){
    if(isNaN(valor)){
        alert("se ingreso un valor invalido");
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_pulgada.value = "";
        document.lasUnidades.unid_pie.value = "";
        document.lasUnidades.unid_yarda.value = "";
    }else if(id== "metro"){
        document.lasUnidades.unid_pulgada.value = 39.3701*valor;
        document.lasUnidades.unid_pie.value = 3.28084*valor;
        document.lasUnidades.unid_yarda.value = 1.09361*valor;
    }
}

function convertirGR(id){
    var grad, rad;
    if(id=="grados"){
        grad = document.getElementById( "grados").value;
        rad = (grad*Math.PI)/180;
    }else if(id=="radianes"){
        rad = document.getElementById("radianes").value;
        grad = (rad*180)/Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}

function mostrar_ocultar(valormo){
    if(valormo== "val_mostrar"){
        document.getElementById("divmo").style.display = "block";
    }else if(valormo == "val_ocultar"){
        document.getElementById("divmo").style.display = "none";
    }
}

function calcularsuma(){
    var num1, num2;
    num1 = Number(document.getElementsByName("sum_num1")[0].value);
    num2 = Number(document.getElementsByName("sum_num2")[0].value);
    document.getElementsByName("sum_total")[0].value = num1+ Number(num2);
}

