
const m = () => {

    let newDistance = 0;
    
    while (true) {

        let distance = +prompt("Қашықтықты енгізіңіз... \n Егер '0' деп жазсаңыз сұрау аяқталады")
        if( distance == 0 ){
            break;
        }

        let measure = prompt(distance + "қащықтығынын өлшем бірлігін енгізіңіз... \nкилометр - kl\nдециметр - ds\nметр - m")
            if( measure == "kl") {
                distance *= 1000;
                newDistance += distance;

            } else if ( measure == "ds") {
                distance /= 10;
                newDistance += distance;

            } else if ( measure == "m") {
                distance *= 1;
                newDistance += distance;

            }

    }

    return newDistance

}

alert("Бүкіл жазған қашықтықтарыңыздың қосындысы: " + m(  ) + " - метр")