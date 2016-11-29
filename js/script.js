
var input = document.getElementById('inputNumber');

input.oninput = function AlertWrong() {
    document.getElementById('hiddenLabel').innerHTML = "Неверный ввод!";
    document.getElementById('hiddenLabel').style.visibility = 'hidden';
    var inSys = $('input[name="inputSysRB"]:checked').val();

    if(inSys == 2) {
        var notBinary = /[^01]/;

        bin = notBinary.test(input.value);
        if (bin) {
           var label = document.getElementById('hiddenLabel');

            label.innerHTML = "Неверный ввод! Двоичные числа содержат 0 или 1";

            label.style.visibility = 'visible';
        }
    }

    if(inSys == 8) {
        var notOct = /[^01234567]/;

        var oct = notOct.test(input.value);
        if(oct)
            document.getElementById('hiddenLabel').style.visibility = 'visible';

    }

    if(inSys == 16) {
        var notHex = /[^0123456789abcdef]/;

        var hex = notHex.test(input.value);
        if(hex)
            document.getElementById('hiddenLabel').style.visibility = 'visible';

    }

}

function ExC () {

    var input = document.getElementById("inputNumber");

    var output = document.getElementById('outputNumber');

    var inSys = $('input[name="inputSysRB"]:checked').val();
    var outSys = $('input[name="outputSysRB"]:checked').val();

    var tmpSys = parseInt(input.value, inSys);

    var outVal = tmpSys.toString(outSys);



    if (outSys == 16){
        if(outVal.toString() == "NaN"){
            output.value = "Неверный ввод";
            //alert("Неверный ввод");
        }
        else
            output.value = outVal;
    }

    else if(isNaN(outVal)) {
        output.value = "Неверный ввод";
        //alert("Неверный ввод");
    }
    else{
        output.value = outVal;
		document.getElementById("congrats!").style.visibility = 'visible';
	}

}




function Del() {
    var input = document.getElementById("inputNumber");

    var output = document.getElementById('outputNumber');

    input.value = "";
    output.value = "";
    document.getElementById('hiddenLabel').style.visibility = 'hidden';

}
