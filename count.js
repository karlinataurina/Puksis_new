// iestatām datumu, līdz kuram skaitīt
var countDownDate = new Date("July 25, 2021 16:15:00").getTime();

// lai apdeido laiku ik pēc sekundes
var x = setInterval(function () {

    // get šodienas datumu un laiku
    var now = new Date().getTime();

    // atrodam attālumu starp tagadējo laiku un laiku līdz kuram skaitīt
    var distance = countDownDate - now;

    // laika aprēķins dienām, stundām, minūtēm un sekundēm
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // izdod rezultātu elementā ar id="counter"
    document.getElementById("counter").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    // kad skaitīšana beigusies, uzrakstām tekstu 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("counter").innerHTML = "Happy birthday!!!";
        document.getElementById("hide").style.display = "none";
        var pic = document.getElementById("Puksis");
        pic.src = "images/webPuksis.jpg";
    }
}, 1000);



// pievienojam dzimšanas dienas viesus datubāzē
// avots: https://stackoverflow.com/a/67558064
const addVisitor = async () => {
    var name = document.getElementById("fname").value
    console.log(name)
    var last_name = document.getElementById("lname").value
    var age = document.getElementById("age").value

    try {
        const response = await fetch('https://apex.oracle.com/pls/apex/karlinataurina/puksis/create_visitor?firstname=' + name + '&lastname=' + last_name + '&age=' + age, {
            method: 'POST',
        });
        const data = await response;
        console.log(data);

        //noslēpj formu
        document.getElementById("frm1").style.display = "none";
        // Apstiprina lietotājam, ka dati saņemti
        var x = document.createElement("h1");
        var t = document.createTextNode("Awesome! Don't forget the gifts!");
        x.appendChild(t);
        document.body.appendChild(x);
    } catch (error) {
        console.log(error)
        var x = document.createElement("h1");
        var t = document.createTextNode("Form submit failed, please try again!");
        x.appendChild(t);
        document.body.appendChild(x);
    }
}