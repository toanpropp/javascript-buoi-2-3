
function salaryDay(){
    var salary = document.getElementById("salaryPerDay").value;
    var days = document.getElementById("days").value;

    var result=document.getElementById("salaryResult").value = salary*days;
    
}

function Average(){
    var n1 = parseInt(document.getElementById("num1").value) ;
    var n2 = parseInt(document.getElementById("num2").value);
    var n3 = parseInt(document.getElementById("num3").value);
    var n4 = parseInt(document.getElementById("num4").value);
    var n5 = parseInt(document.getElementById("num5").value);
    var result=document.getElementById("averageResult").value = (n1+n2+n3+n4+n5)/5;
}

function currency(){
    var rate_exchange= 23500;
    var usd = document.getElementById("usd").value;
    var vnd = document.getElementById("vnd").value = new Intl.NumberFormat('vn-VN').format(usd * rate_exchange);

    
}

function area_perimeter(){
    var L=parseInt(document.getElementById("long").value);
    var w= parseInt(document.getElementById("width").value);

    var area= document.getElementById("area").value= L * w;
    var perimeter= document.getElementById("perimeter").value=(L + w)*2
}
function sum2Digit(){
    var n = document.getElementById("number").value;
    var num1;
    var num2;
    

    num1 = n % 10;
    num2 = Math.floor(n/10);
    var sum = document.getElementById("sum").value = num1 + num2;
}