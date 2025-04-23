let click_Power = 1;


function click_Handler ()
{

    let user_Points = document.getElementById("points").innerText;
    console.log(user_Points);
    user_Points = user_Points + click_Power;
    document.getElementById("points").innerText = user_Points;
}

function upgrade_Handler() {

    let user_Points = document.getElementById("points").innerText;

}