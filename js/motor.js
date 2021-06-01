function calculame(){
    numero1=parseFloat(document.getElementById('ainfo').value);
    numero2=parseFloat(document.getElementById('binfo').value);
    numero3=parseFloat(document.getElementById('cinfo').value);

    numero4=parseFloat(((numero3*numero2)/numero1).toFixed(2));

    //alert( numero4);

    
    document.getElementById('xinfo').value=numero4;
}