function resultado(input) {
    var valor = input.value.toUpperCase();
    var id = input.id;

    if (valor == id) {
        input.value = `${input.value}`;
        input.style = `background-color: #a4df66; color:black; border: 1px solid #FFF`;
    } else {
        input.style = `background-color: #c51e1c; border: 1px solid #FFF`;
        input.value = ``;
    }
}
