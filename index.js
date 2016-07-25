

window.addEventListener('beforeunload', function(window){
  console.log('yea! sure!');

  var canvas = document.getElementById("myCanvas"); // grabs DOM Element by id as variable.
  var ctx = canvas.getContext("2d");
  // rectangle
  ctx.fillStyle = "#FF2222";
  ctx.fillRect(23,14,150,175);
  // lines
  ctx.moveTo(20,16); // start point x,y
  ctx.lineTo(540,260); // end point x,y
  ctx.stroke(); // go! draw a outline..

  ctx.moveTo(20,16);
  ctx.lineTo(640,290);
  ctx.stroke();
  ctx.moveTo(640,290);
  ctx.lineTo(540,260);
  ctx.stroke();
  // circle ..  arc(x,y,r,start,stop)
  ctx.beginPath();
  ctx.arc(389,270,40,0,3*Math.PI);
  ctx.stroke();

  // gradient
  var grd=ctx.createLinearGradient(0,0,200,0);
  grd.addColorStop(0,"black");
  grd.addColorStop(1,"green");
  // Fill with gradient
  ctx.fillStyle=grd;
  ctx.fillRect(10,10,150,80);
    return function(){
        if (window.LiveReload){
            window.LiveReload.connector.socket.close();
        }
    }

}(window));
