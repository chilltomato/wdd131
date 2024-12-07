var now = new Date();
var Month = now.getMonth()  + 1;
var date = now.getDate();


function getseasons(mon){
    if (mon === 12 || mon <= 2) return 'winter';
    if (mon >= 3 && mon <= 5) return 'spring';
    if (mon >= 6 && mon <= 8) return 'summer';
    if (mon >= 9 && mon <= 11) return 'autumn';    
    return seasons[mon];  
}

console.log('currently it is ' + getseasons(Month))

document.addEventListener('DOMContentLoaded', function(){
    var season = getseasons(Month)
    document.body.className = season;
    console.log('currently it is ' + season);
});

