/*Reto 1*/
function sumMultiple(){
    let multipple ='';
    for(let i =3; i<=1000;i++){
        if(i ==1000){
            multipple += i;
            break;
        }
        if(i%3 == 0){
            multipple += i + ', ';
        }
        if(i%5 == 0){
            multipple += i + ', ';
        }
    }

    document.getElementById('probar').innerHTML = `<p>${multipple}</p>`;
}

/*Reto 2*/