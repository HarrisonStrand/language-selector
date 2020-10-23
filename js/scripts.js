$(document).ready(function(){
  $("button#submit").click(function(){

    const musicStr = $("input:radio[name=music]:checked").val();
    const music = parseInt(musicStr);
    
    const beverageStr = $("input:radio[name=music]:checked").val();
    const beverage = parseInt(beverageStr);
    
    const activityStr = $("input:radio[name=music]:checked").val();
    const activity = parseInt(activityStr);

    const result = music + beverage + activity;

    


    event.preventDefault();
  });
});  