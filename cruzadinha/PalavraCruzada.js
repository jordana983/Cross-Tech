function validação(input) {
    var letra = input.value.toUpperCase();
    var id = input.id;

    if (letra === id) {
        input.value = `${input.value}`;
        input.style = "background-color: #a4df66; border: 1px solid #FFF";
    } else {
        input.style = "background-color: #c51e1c; border: 1px solid #FFF";
        input.value = "";
    }
}