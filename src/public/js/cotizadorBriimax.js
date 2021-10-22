
var cantidad;
var costoFinal;
var costoUnidad;


function sumaDeProductos(xl, l, m, s) {
    if(isNaN(xl)){
        xl = 0;
    }
    if(isNaN(l)){
        l = 0;
    }
    if(isNaN(m)){
        m = 0;
    }
    if(isNaN(s)){
        s = 0
    }
    var sumaDevuelta = xl + l + m + s;
    return sumaDevuelta;
}


var sumar = function(){
    var xl = parseFloat(document.getElementById('xl').value);
    var l = parseFloat(document.getElementById('l').value);
    var m = parseFloat(document.getElementById('m').value);
    var s = parseFloat(document.getElementById('s').value);
    var catidadText = document.getElementById('costoTotal');
    
    catidadText.innerHTML = sumaDeProductos(xl, l, m, s) * 130 + "Bs";       
    costoFinal = sumaDeProductos(xl, l, m, s) * 130 + 'Bs';
    cantidad = sumaDeProductos(xl, l, m, s);

}

var getData = function(){
    event.preventDefault();
    var xl = document.getElementById('xl').value;
    var l = document.getElementById('l').value;
    var m = document.getElementById('m').value;
    var s = document.getElementById('s').value;
    var departamento = document.getElementById('departamentoselect').value;
    console.log(xl + l, m, s, departamento);

    if(xl <= "0" && l <= "0" && m <= "0" && s <= "0"){
        document.getElementById('xl').focus();
        alert("El pedido minimo es de 1 unidad")
    }else{
        window.open(`https://api.whatsapp.com/send?phone=+59176576474&text=*EL%20JUEGO%20DEL%20CALAMAR*%0A%0A*PEDIDO*:%20${cantidad}%0A%0A*PRECIO%20UNIDAD*:%20130Bs%0A%0A*TALLAS*:%0A*XL:*%20${xl}%0A*L:*%20${l}%0A*M:*%20${m}%0A*S:*%20${s}%0A%0A*DEPARTAMENTO*:%20${departamento}%0A%0A%0A*PRECIO%20TOTAL*:%20${costoFinal}`)
    }
}
