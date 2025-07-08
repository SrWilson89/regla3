document.addEventListener('DOMContentLoaded', function() {
    const calcularBtn = document.getElementById('calcular-btn');
    const limpiarBtn = document.getElementById('limpiar-btn');
    
    calcularBtn.addEventListener('click', calcularReglaDeTres);
    limpiarBtn.addEventListener('click', limpiarCampos);
    
    // También podemos agregar la funcionalidad de calcular al presionar Enter
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calcularReglaDeTres();
            }
        });
    });
});

function calcularReglaDeTres() {
    const a = parseFloat(document.getElementById('ainfo').value);
    const b = parseFloat(document.getElementById('binfo').value);
    const c = parseFloat(document.getElementById('cinfo').value);
    const resultadoInput = document.getElementById('xinfo');
    
    // Validación de campos vacíos
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert('Por favor, complete todos los campos con valores numéricos');
        return;
    }
    
    // Validación de división por cero
    if (a === 0) {
        alert('El valor A no puede ser cero (división por cero)');
        return;
    }
    
    const resultado = (c * b) / a;
    resultadoInput.value = resultado.toFixed(2);
}

function limpiarCampos() {
    document.getElementById('ainfo').value = '';
    document.getElementById('binfo').value = '';
    document.getElementById('cinfo').value = '';
    document.getElementById('xinfo').value = '';
    document.getElementById('ainfo').focus();
}