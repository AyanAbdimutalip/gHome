//                TAPSYRMA 1
// const qosu = () => {
//     let resault = 0;
//     for(let i = 1; i <= 100; i++){
//         resault += i
//     }
//     return resault
// }

// console.log(qosu);


//                TAPSYRMA 2
// const arif = () => {
//     let res = 0;
//     for(g = 1; g < 5; g++){
//         let san = +prompt("san engiz")
//         res += san
//     }
//     return res /= 5

// }



//                TAPSYRMA 3
// const fakterial = () => {
//     let num = +prompt("san engiz")
//     let num1 = 0;
//     for(f = 1; num > f; f--){
//         num *= f
//         num1 += num
//     }
//     return num1
// }



//                TAPSYRMA 4
// const qupia = () => {
//     let bolzham = "";
//     let san = 0;
    
//     while(true){
//         let bolzham = +prompt("1 - 100 ge deyin san engiz")
//         let san = 76;

//         if(bolzham == 76){
//             alert("durys")
//             break;
//         }

//         if (bolzham >= 81 && bolzham >= 71){
//             alert("jakyn");
//         } else{
//             alert("alys");
//         }
//     }
//     return bolzham;
// }

// alert(qupia())



//                TAPSYRMA 5
// const name = () => {
//     let num2 = +prompt("1 san")
//     let num3 = +prompt("2 san")
//     let kishi = 0;
//     let ulken = 0;
//     let ten = 0;

//     if(num2 > num3){
//         ulken += num2;
//         kishi += num3;
//     }else{
//         ulken += num3;
//         kishi += num2
//     }

//     for(let i =1; kishi < ulken; kishi ++){
//         ten += kishi
//     }
// }


//                TAPSYRMA 6
// const taq = () => {
//     let san = +prompt("san engiz")

//     if(san % 2 == 0){
//         alert("Siz zhazgan san jup")
//     }else {
//         alert("taq")
//     }
//     return san;
// }
// alert(taq())


//                 TAPSYRMA 7                   
// const keri = () => {
//     let keri = +prompt("san engiz");

//     for(i = 1; keri > i; keri --){
//         alert(keri)
//     }
//     return keri
// }


//                TAPSYRMA 8
// const qara = () => {
//     let qarapai = +prompt("san engiz")

//     if(qarapai / qarapai == 1 && qarapai / 1 == qarapai ){
//         alert("jay san")
//     }else{
//         alert("jay emes san")
//     }

//     return qarapai;
// }

// alert(qara());



//                TAPSYRMA 9
const bergerKing = () => {
    let kaspi = +prompt("Қандай счетыңыздан төлем жасайсыз \n1) KZT\n2) USD \n3) CNY \nСчетыңызды таңдау үшін оның реттік номерін жазыңыз");
    let kaspiKZT = 10000;
    let KaspiUSD = 500;
    let kaspiCNY = 7600;
    let kaspiNEW = 0;


    if (kaspi == 2) {
        kaspiNEW = KaspiUSD * 500;
    } else if (kaspi == 1) {
        kaspiNEW = kaspiKZT * 1;
    } else if (kaspi == 3) {
        kaspiNEW = kaspiCNY * 60;
    } else {
        alert("Қате таңдадыңыз!");
        return;
    }

    while (true) {
        let menu = prompt("Тапсырыс беріңіз: \n1)Бургер 1500 KZT\n2)ЧизБургер 1200 KZT\n3)Донер 1300 KZT\n4)Coca cola 500 KZT\n5)Fnata 500 KZT\n6)Sprite 500 KZT\n7)Garila 600 KZT\n8)Pepse 500 KZT\n9)Чай 300 KZT\n10)Лимонад 450 KZT\nТағамды таңдау үшін тағамның реттік номерін жазыңыз\nегер тапсырыс бермейтін болсаңыз 'stop' - деп жазыңыз");

        if (menu == "stop") {
            break;
        }

        let price = 0;
        let item = "";

        if (menu == "1") {
            price = 1500;
            item = "Бургер";
        } else if (menu == "2") {
            price = 1200;
            item = "ЧизБургер";
        } else if (menu == "3") {
            price = 1300;
            item = "Донер";
        } else if (menu == "4") {
            price = 500;
            item = "Coca cola";
        } else if (menu == "5"){
            price = 500;
            item = "FAnta";
        } else if (menu == "6"){
            price = 500;
            item = "Sprite";
        } else if (menu == "7"){
            price = 500;
            item = "Garila";
        }else if (menu == "8"){
            price = 500;
            item = "Pepse";
        }else if (menu == "9"){
            price = 500;
            item = "Чай";
        }else if (menu == "10"){
            price = 500;
            item = "лимонад";
        }

        if (kaspiNEW < price) {
            alert("Счетыңызда ақша жеткіліксіз");
            break;
        }

        kaspiNEW -= price;
        resault += price;
        ChekList += menu + ") " + item + "\n";
        alert("Төлем қабылданды. Сізде қалған ақша: " + kaspiNEW + " KZT");
    }

    alert("Сіз тапсырыс берген тағамдар тізімі: \n" + ChekList + "\nСіздің счетыңыздан " + resault + " KZT ақша шешіп алынды");
};

bergerKing();




