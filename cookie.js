var cookiecount = 0;
var autoClick = 0;

var extraCook = 0;

function cookieClick(){
    cookiecount += 1;
    document.getElementById('counter').innerHTML = cookiecount;
}

function upgrade1(){
    if (cookiecount >= ((autoClick+1) * 10)){  
        cookiecount -= ((autoClick+1) * 10);   
        autoClick += 1; 
        document.getElementById('upgradeCost1').innerHTML = "Purchase for " + ((autoClick+1) * 10) + " Cookies";
        document.getElementById('upgradeAmount1').innerHTML = "Clicks per second: " + autoClick;
    }
    else{
        alert('You dont have enough cookies')
    }
}

function upgrade2(){
    if (cookiecount >= 100){  
        cookiecount -= 100;   
        extraCook += 1; 
        document.getElementById('upgradeAmount2').innerHTML = "Clicks per second: " + extraCook;
    }
    else{
        alert('You dont have enough cookies')
    }
}

setInterval(function(){
    cookiecount += autoClick;
    cookiecount += extraCook;
    document.getElementById('counter').innerHTML = cookiecount;
},1000);
