const turonCheckbox = document.getElementById("turoncb");
const maruyaCheckbox = document.getElementById("maruyacb");
const bananacueCheckbox = document.getElementById("bananacuecb");
const minatamisCheckbox = document.getElementById("minatamiscb");

turonCheckbox.onchange=function(){
    document.getElementById("turont").disabled = !this.checked;
}
maruyaCheckbox.onchange=function(){
    document.getElementById("maruyat").disabled = !this.checked;
}
bananacueCheckbox.onchange=function(){
    document.getElementById("bananacuet").disabled = !this.checked;
}
minatamisCheckbox.onchange=function(){
    document.getElementById("minatamist").disabled = !this.checked;
}