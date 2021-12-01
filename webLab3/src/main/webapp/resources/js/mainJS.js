let previousButton = null;
let rButtonValue = 0;
function press() {
    let rates = document.getElementsByName('sendForm:r_value');
    let rate_value = null;
    for(let i=0; i<rates.length; i++){
        if(rates[i].checked){
            rate_value = rates[i].value;
        }
    }
    rButtonValue = rate_value;
    changeCanvas(rButtonValue);
}

function chooseX(){
    let bHidden = document.getElementById('sendForm:x_hidden');
    let links = document.querySelectorAll(".x_link");

    links.forEach(click);
    function click(element) {
        element.onclick = function () {
            links.forEach(function (element) {
                $(element).css('color', '#42a7f5');
            });

            $(element).css('color', '#c90707');
            bHidden.value = this.textContent;
        }
    }
}
function checkY(){
    let valY = document.querySelector('.y_Val').value;
    let check = valY !== "" && isFinite(valY) && valY <= 3 && valY >=-3;
    console.log(check);
    if (!check){
        alert('Y must be between -3 and 3');
    }
}
