<template>
 <section class="my-skill container">
     <body>
  <div class="container">
    <h2 class="my-skills">My Skills</h2>
    <div class="bar-1">
    <div class="title">HTML5</div>
    <div class="bar" data-width="65%">
      <div class="bar-inner">
        
      </div>
      <div class="bar-percent">65%</div>
    </div>
    </div>
    <div class="bar-1">
    <div class="title" style="color: #084c61;">CSS3</div>
    <div class="bar" data-width="85%">
      <div class="bar-inner" style="background: #084c61;">
        
      </div>
      <div class="bar-percent">85%</div>
    </div>
    
    </div>
    <div class="bar-1">
    <div class="title" style="color: #525252;">Javascript</div>
    <div class="bar" data-width="95%">
      <div class="bar-inner" style="background: #525252;">
        
      </div>
      <div class="bar-percent">95%</div>
    </div>
    </div>
    <div class="bar-1">
    <div class="title" style="color: #5a68a5">jQuery</div>
    <div class="bar" data-width="75%">
      <div class="bar-inner" style="background: #5a68a5;">
        
      </div>
      <div class="bar-percent">75%</div>
    </div>
    </div>
  </div>
  
</body>
    </section>
</template>


<script setup>
var bars = document.querySelectorAll(".bar");

bars.forEach(function(bar) {
  var barInner = bar.querySelector(".bar-inner");
  var dataWidth = bar.getAttribute("data-width");
  
  animateWidth(barInner, dataWidth, 2000);
});

function animateWidth(element, targetWidth, duration) {
  var startWidth = parseFloat(element.style.width) || 0;
  var startTime = null;

  function animationStep(timestamp) {
    if (!startTime) startTime = timestamp;

    var progress = timestamp - startTime;
    var percentage = Math.min(progress / duration, 1);
    var currentWidth = startWidth + percentage * (parseFloat(targetWidth) - startWidth);

    element.style.width = currentWidth + "%";

    if (percentage < 1) {
      requestAnimationFrame(animationStep);
    }
  }

  requestAnimationFrame(animationStep);
}


</script>








<style>


.title {
  font-weight: bold;
  font-size: 20px;
  color: #db3a34;
}

.bar {
  width: 90%;
  height: 35px;
  background: #fff;
  border-radius: 5px;
  position: relative;
  transition: all 2s linear;
}

.bar-1,
.my-skills {
  width: 80%;
  margin: 10px auto 25px;
}

.bar-inner {
  width: 0;
  height: 35px;
  line-height: 35px;
  background: #db3a34;
  border-radius: 5px 0 0 5px;
}

.bar-percent {
  position: absolute;
  right: 10px;
  top: 5px;
  font-size: 18px;
}
</style>