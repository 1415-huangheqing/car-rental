<template>
<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel" style="width: 100%; height: 42%;">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../images/04.jpg" class="d-block w-100" alt="车辆1">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../images/05.jpg" class="d-block w-100" alt="车辆2">
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../images/03.jpg" class="d-block w-100" alt="车辆3">
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </button>
</div>
</template>
<script>
export default{
    name:'Banner'
}

</script>
<style>
.carousel-inner {
  height: 300px;
  width: 40%;
  background-color: #777;
  margin: 20px auto;
}
/* .carousel-inner .carousel-item .img {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 50%;
  height: 100px;
} */
.carousel-item{
  height: 100%;
  width: 100%;
}
</style>