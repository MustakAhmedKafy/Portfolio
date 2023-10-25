<!-- ProgressBar.vue -->
<template>
<!-- HTML Progress Bar -->
<div class="skill-progress-bar">
  <div class="container">
  <div class="row">
<div class="col-md-4">
  <div class="block">
		<div class="box">
			<p class="number">
				<span class="num">80</span>
				<span class="sub">%</span>
			</p>
			<p class="title">HTML</p>
		</div>
		<span class="dots"></span>
		<svg class="svg">
			<defs>
				<linearGradient id="gradientStyle">
					<stop offset="0%" stop-color="#565656" />
					<stop offset="100%" stop-color="#b7b5b5" />
				</linearGradient>
			</defs>
			<circle class="circle" cx="90" cy="90" r="80" />
		</svg>
	</div>
</div>
<div class="col-md-4">
  	<div class="block">
		<div class="box">
			<p class="number">
				<span class="num">100</span>
				<span class="sub">%</span>
			</p>
			<p class="title">CSS</p>
		</div>
		<span class="dots"></span>
		<svg class="svg">
			<circle class="circle" cx="90" cy="90" r="80" />
		</svg>
	</div>
</div>
<div class="col-md-4">
  	<div class="block">
		<div class="box">
			<p class="number">
				<span class="num">35</span>
				<span class="sub">%</span>
			</p>
			<p class="title">JS</p>
		</div>
		<span class="dots"></span>
		<svg class="svg">
			<circle class="circle" cx="90" cy="90" r="80" />
		</svg>
</div>
</div>

</div>

</div>
</div>
</template>

<script setup>
document.addEventListener('DOMContentLoaded', function() {
  var blocks = document.querySelectorAll('.block');

  function animateBlock(block) {
    var numElement = block.querySelector('.num');
    var num = parseInt(numElement.innerText);
    var count = 0;
    var time = 2000 / num;
    var circle = block.querySelector('.circle');

    var intervalId = setInterval(function() {
      if (count === num) {
        clearInterval(intervalId);
      } else {
        count += 1;
        numElement.innerText = count;
      }
    }, time);

    circle.style.strokeDashoffset = 503 - (503 * (num / 100));

    var dots = block.querySelector('.dots');
    dots.style.transform = 'rotate(' + 360 * (num / 100) + 'deg)';

    if (num === 100) {
      dots.style.opacity = 0;
    }
  }

  window.addEventListener('load', function() {
    blocks.forEach(function(block) {
      animateBlock(block);
    });
  });
});


</script>

<style scoped>

.skill-progress-bar {
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	padding: 20px;
	background-color: #292929;
}
.block {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 180px;
	height: 180px;
	border-radius: 50%;
}

.box {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: calc(100% - 50px);
	height: calc(100% - 50px);
	border-radius: 50%;
	background-color: #292929;
	box-shadow: 0 0 5px 3px #222121;
}

.box::before {
	position: absolute;
	content: '';
	width: calc(100% + 28px);
	height: calc(100% + 28px);
	border-radius: 50%;
	border: 1px solid #353535;
}

.box .number span {
	color: #e9e9e9;
}

.box .number .num {
	font-size: 35px;
	font-weight: bold;
}

.box .number .sub {
	font-size: 20px;
}

.box .title {
	font-size: 15px;
	color: #9b9b9b;
}

.dots {
	display: block;
	position: absolute;
	z-index: 2;
	width: 100%;
	height: 100%;
	border-radius: 50%;
	transition: 2s transform, 2s opacity ease;
}

.dots::after {
	position: absolute;
	content: '';
	width: 10px;
	height: 10px;
	top: 5px;
	left: 50%;
	border-radius: 50%;
	background-color: #b7b5b5;
	box-shadow: 0 0 5px 2px #585858;
	transform: translateX(-50%);
}

.svg {
	position: absolute;
	width: 100%;
	height: 100%;
	fill: none;
	transform: rotate(-90deg);
}

.circle {
	stroke: url(#gradientStyle);
	stroke-width: 4px;
	stroke-dasharray: 503;
	stroke-dashoffset: 503;
	animation-duration: 2s;
	animation-timing-function: linear;
	animation-fill-mode: forwards;
	transition: 2s stroke-dashoffset;
}

</style>