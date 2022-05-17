/**
 * conversion de unidades de metros, yardas, pies y unidades
 * @param (string) id = el id de los metros, yardas, pies y pulgadas
 * @param (number) valor = el valor de los metros, yardas, pies y pulgadas
 */

function cambiarUnidades(id, valor){
    var metro, pulgada, pie, yarda;
    if(valor.includes(",")){
        valor = valor.replace(",", ".");
    }
    if(isNaN(valor)){
        alert("se ingreso un valor invalido");
        metro = "";
        pulgada = "";
        pie = "";
        yarda = "";
    }else if(id== "metro"){
        metro = valor;
        pulgada = 39.3701*valor;
        pie = 3.28084*valor;
        yarda = 1.09361*valor;
    }else if(id== "pulgada"){
        pulgada = valor;
        metro = 0.0254*valor;
        pie = 0.0833333*valor;
        yarda = 0.0277778*valor;
    }else if(id== "yarda"){
        yarda = valor;
        metro = 0.9144*valor;
        pulgada = 36*valor;
        pie = 3*valor;
    }else if(id== "pie"){
        pie = valor;
        metro = 0.3048*valor;
        pulgada = 12*valor;
        yarda = 0.333333*valor;
    }

    document.lasUnidades.unid_metro.value = Math.round(metro*100)/100;
    document.lasUnidades.unid_pulgada.value = Math.round(pulgada*100)/100;
    document.lasUnidades.unid_pie.value = Math.round(pie*100)/100;
    document.lasUnidades.unid_yarda.value = Math.round(yarda*100)/100;
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
    document.getElementsByName("sum_total")[0].innerHTML = num1+ Number(num2);
}

function cargarweb(){
    var cant, unidad, urlcomp;
    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;
    urlcomp = "segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlcomp);
}

function cargarresultado(){
    var urlcomp, cant, unidad;
    urlcomp = window.location.href.split("/")[5];
    cant = urlcomp.split("#")[1];
    unidad = urlcomp.split("#")[2];

    document.getElementById("dist").value = cant + " " + unidad;
}

