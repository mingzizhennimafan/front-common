<template>
  <div>
    <Carousel autoplay v-model="CarouselValue" loop>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="../assets/1.jpg" class="img-h" alt="">
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="../assets/2.jpg" class="img-h" alt="">
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="../assets/3.jpg" class="img-h" alt="">
        </div>
      </CarouselItem>
    </Carousel>
    <Button type="primary">确认</Button>
  </div>
</template>

<script>
  export default {
    name: 'ItemOne',
    data() {
      return {
        CarouselValue:0,
      }
    }
  }
</script>

<style scoped>
  .img-h{
    height: 500px;
  }
</style>
