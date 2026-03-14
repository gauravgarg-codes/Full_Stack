const salons = [
{
name:"Style Cut Salon",
rating:4.5,
distance:"1.2 km"
},
{
name:"Urban Hair Studio",
rating:4.2,
distance:"2 km"
}
];

function openSalon(name){
localStorage.setItem("selectedSalon", name);
window.location.href = "salon.html";
}