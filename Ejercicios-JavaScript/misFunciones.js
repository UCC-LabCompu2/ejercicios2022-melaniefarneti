
function cambiarUnidades(id, value){
    if(isNan(value)){
        alert("se ingreso un valor invalido");
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_pulgada.value = "";
        document.lasUnidades.unid_pie.value = "";
        document.lasUnidades.unid_yarda.value = "";
    }else if(id== "metro"){
        document.lasUnidades.unid_pulgada.value = 39.3701*value;
        document.lasUnidades.unid_pie.value = 3.28084*value;
        document.lasUnidades.unid_yarda.value = 1.09361*value;
    }
}