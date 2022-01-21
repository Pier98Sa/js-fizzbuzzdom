const containerElement = document.getElementById('container');

for (let i = 1; i <= 1000; i++){

    if ( i % 3 == 0 && i % 5 == 0){

        containerElement.innerHTML += "<div class= 'box bg_red'>" + "fizzbuzz" + "</div>";
    } else if (i % 5 == 0){

        containerElement.innerHTML += "<div class= 'box bg_yellow'>" + "buzz" + "</div>";
    } else if ( i % 3 == 0){

        containerElement.innerHTML += "<div class= 'box bg_green'>" + "fizz" + "</div>";
    } else{

        containerElement.innerHTML += "<div class= 'box bg_blue'>" + i + "</div>";
    }

    
}