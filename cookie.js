var cookiecount = 0;
var autoClick = 0;

function cookieClick(){
    cookiecount += 1;
    document.getElementById('counter').innerHTML = cookiecount;
}

function upgrade(){
    if (cookiecount >= ((autoClick+1) * 10)) {  
        cookiecount -= ((autoClick+1) * 10);   
        autoClick += 1; 
        document.getElementById('upgradeCost').innerHTML = "Purchase for " + ((autoClick+1) * 10) + " Cookies";
        document.getElementById('upgradeAmount').innerHTML = "Clicks per second: " + autoClick;
    }
    else{
        alert('You dont have enough cookies')
    }
}

setInterval(function(){
    cookiecount += autoClick;
    document.getElementById('counter').innerHTML = cookiecount;
},1000);
