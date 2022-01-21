const containerElement = document.getElementById('container');

for (let i = 1; i <= 1000; i++){

    
    if ( i % 3 == 0 && i % 5 == 0){
        // controllo se il numero è multiplo sia di 3 che di 5
        containerElement.innerHTML += "<div class= 'box bg_red'>" + "fizzbuzz" + "</div>";
    } else if (i % 5 == 0){
        // controllo se il numero è multiplo di 5
        containerElement.innerHTML += "<div class= 'box bg_yellow'>" + "buzz" + "</div>";
    } else if ( i % 3 == 0){
        // controllo se il numero è multiplo  di 3 
        containerElement.innerHTML += "<div class= 'box bg_green'>" + "fizz" + "</div>";
    } else{
        // numero che non è multiplo ne di 3 ne di 5
        containerElement.innerHTML += "<div class= 'box bg_blue'>" + i + "</div>";
    }

    
}