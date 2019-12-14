let scrollIndex  = ()=>{
    document.getElementById('section2').scrollIntoView(true);return false;
}
$(function() {  
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.setLineDash([3,5]);
  ctx.lineWidth = 4;
  ctx.strokeStyle = '#1E90FF';

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(100, 0);
  ctx.stroke();
  
});
function getBoundary(){       
  var bdary = new BMap.Boundary();
  bdary.get("赤壁市", function(rs){       //获取行政区域
    map.clearOverlays();        //清除地图覆盖物       
    var count = rs.boundaries.length; //行政区域的点有多少个
    if (count === 0) {
      alert('未能获取当前输入行政区域');
      return ;
    }
          var pointArray = [];
    for (var i = 0; i < count; i++) {
      var ply = new BMap.Polygon(rs.boundaries[i], {strokeWeight: 2, strokeColor: "#ff0000"}); //建立多边形覆盖物
      map.addOverlay(ply);  //添加覆盖物
      pointArray = pointArray.concat(ply.getPath());
    }    
    map.setViewport(pointArray);    //调整视野  
    addlabel();               
  });   
}

setTimeout(function(){
  getBoundary();
}, 2000);
var map = new BMap.Map("allmap");    // 创建Map实例
map.centerAndZoom("赤壁", 11);  // 初始化地图,设置中心点坐标和地图级别
map.disableDragging();     //开启鼠标滚轮缩放


var mySwiper = new Swiper ('.swiper-container', {
  slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
})        