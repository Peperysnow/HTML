let click_Power = 1;
let upgrade_count = 1;
let upgrade2_count = 0;


function click_handler ()
{

    let user_Points = Number(document.getElementById("points").innerText);
    console.log(user_Points);
    user_Points = user_Points + click_Power;
    document.getElementById("points").innerText = user_Points;

}

function upgrade_handler() {

    let user_Points = document.getElementById("points").innerText;
    let upgrade_Price = 10 * upgrade_count;
    if(user_Points >= upgrade_Price)
{
 click_Power++;
 document.getElementById("points").innerText = user_Points - 15
 document.getElementById("Upgrade1").value = upgrade_Price;
}
else
{
  console.warn("Points < 15");
}
}
function upgrade2_handler()
{
let user_Points = document.getElementById("points").innerText;
if(user_Points >= 30)     {

    const myInterval = setInterval(passive_income, 1000);
}
    {
upgrade2_count++;
document.getElementById("points").innerText = user_Points - 30;

}
}
function passive_income()
{
  let points = document.getElementById("points").innerText;
  points += 1 * upgrade2_count;
  document.getElementById("points").innerText = points;
}
if(upgrade2_count > 0)
 {
    
 }
 
