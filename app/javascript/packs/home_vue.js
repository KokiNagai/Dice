import Vue from 'vue/dist/vue.esm'

const buildSlideMarkup = (count) => {
	let slideMarkup = '';
  for (var i = 1; i <= count; i++) {
  	slideMarkup += '<slide><span class="label">' + "<p><%= image_tag('homepic.jpg') %></p>" + '</span></slide>'
  }
  return slideMarkup;
};

new Vue({
  el: "#home-slide",
  components: {
    'carousel': VueCarousel.Carousel,
    'slide': VueCarousel.Slide
  },
  template: '<div><carousel :scrollPerPage="false">' + buildSlideMarkup(4) + '</carousel></div>'
});
