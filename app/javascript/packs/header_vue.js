import Vue from 'vue/dist/vue.esm'

const app12 = new Vue({
  el: '#header-sub',
  data: {
    show: false
  }
})

new Vue({
  el: "#home-slide",
  components: {
    'carousel': VueCarousel.Carousel,
    'slide': VueCarousel.Slide
  }
});
