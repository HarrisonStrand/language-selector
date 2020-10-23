$(document).ready(function(){
  $("button#submit").click(function(){

    const musicStr = $("input:radio[name=music]:checked").val();
    const music = parseInt(musicStr);

    const beverageStr = $("input:radio[name=beverage]:checked").val();
    const beverage = parseInt(beverageStr);
    
    const activityStr = $("input:radio[name=activity]:checked").val();
    const activity = parseInt(activityStr);
    
    const distractionStr = $("input:radio[name=distraction]:checked").val();
    const distraction = parseInt(distractionStr);

    const result = music + beverage + activity + distraction;

    if (result >=4 && result <=6) {
      $(".cSharp").show();
      $(".java").hide();
      $(".ruby").hide();
      $(".go").hide();

    } else if (result >=7 && result <=9) {
      $(".cSharp").hide();
      $(".java").show();
      $(".ruby").hide();
      $(".go").hide();
      
    } else if (result >=10 && result <=12) {
      $(".cSharp").hide();
      $(".java").hide();
      $(".ruby").show();
      $(".go").hide();
      
    } else {
    $(".cSharp").hide();
    $(".java").hide();
    $(".ruby").hide();
    $(".go").show();
    
    }

    event.preventDefault();
  });
});  