

var minHour = 6;
var maxHour = 18;
// var minCustomers = 23;
// var maxCustomers = 65;
// var avgCookies = 6.3;
var locationCustomersDetais = { 
     
    1: {
    location: '1st and pike',
    minCustomers: 23,
    maxCustomers: 65,
    avgCookies: 6.3},
    2: {
    location: 'SeaTac Airport',
    minCustomers: 3,
    maxCustomers: 24,
    avgCookies: 61.2},
    3: {
    location: 'Seattle Center',
    minCustomers: 11,
    maxCustomers: 38,
    avgCookies: 3.7}
};
var locationSales = {};

for(i=1; i<= 3; i++){
    var hourlyCustomers = {};
    var hourlyCookies = {};

    //  console.log(locationCustomersDetais[i]["location"]);
    minCustomers = locationCustomersDetais[i]["minCustomers"];
    maxCustomers = locationCustomersDetais[i]["maxCustomers"];
    avgCookies = locationCustomersDetais[i]["avgCookies"];
        for( var hour = minHour; hour<= maxHour; hour++) {

            eachHourCustomers = Math.floor(Math.random() * (maxCustomers - minCustomers)) + minCustomers;
            hourlyCustomers[hour] = eachHourCustomers;
            hourlyCookies[hour] = Math.floor(eachHourCustomers * avgCookies);
        // getProperty("key1");
        }
    locationSales[i] = hourlyCookies;
}


for(i=1; i<= 3; i++){

    var totalCookies = 0 ;
    locationSales[i];

  
    var h2 = document.createElement("h2");
    h2.textContent = "Store: " + locationCustomersDetais[i]["location"];
    h2.id = i;

    var ul = document.createElement("ul");
  
    for( var hour = minHour; hour<= maxHour; hour++) {
        console.log(locationSales[i][hour]);
        var li = document.createElement("li");
        li.textContent = hour + ":" + locationSales[i][hour] + " cookies";
        ul.appendChild(li);
        totalCookies = totalCookies + locationSales[i][hour];
}

        // h2.appendChild(ul);
       document.getElementById("hourly").appendChild(h2);
       document.getElementById("hourly").appendChild(ul);
    var li = document.createElement("total");
    li.textContent = "Total Cookies:" + totalCookies;
    li.style.fontSize = 18 ;
    document.getElementById("hourly").appendChild(li);
}


function showAboutUs() {
    alert("test");
    document.getElementById("specials").style.display="none";
    document.getElementById("hours").style.display="none";
    document.getElementById("location").style.display="none";
    document.getElementById('contactus').style.display = "none";
    document.getElementById('aboutus').style.display = "block";
 }
