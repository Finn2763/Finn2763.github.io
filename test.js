let points = 0;
let upgrade1Price = 5;
let clickPower = 1;
let poly1 = 0;
function handleClick() {
    points += clickPower;
    console.log(points)
    document.getElementById("output").innerHTML = points;
}
function upgrade1Bought() {
    if (points >= upgrade1Price) {
        points = points - upgrade1Price;
        poly1 += 1;
        upgrade1Price = upgrade1Price + poly1;
        clickPower += 1;
        document.getElementById("upgrade1Price").innerHTML = "Cost: " + upgrade1Price;
        document.getElementById("output").innerHTML = points;
        document.getElementById("clickPower").innerHTML = "Click Power: " + clickPower;
    } else {
        console.log("not enough money 😭😭😭")
    }
}