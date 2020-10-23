$(document).ready(function(){
  $("button#submit").click(function(){

    const musicStr = $("input:radio[name=music]:checked").val();
    const music = parseInt(musicStr);
    
    const beverageStr = $("input:radio[name=beverage]:checked").val();
    const beverage = parseInt(beverageStr);
    
    const activityStr = $("input:radio[name=activity]:checked").val();
    const activity = parseInt(activityStr);

    const result = music + beverage + activity;

    if (result >=5 && result <=7) {
      $("")
    } else if (result >=10 && result <=12) {

    } else if (result >=13 && result <=15) {

    } else (result ===8 || result ===9)


    event.preventDefault();
  });
});  