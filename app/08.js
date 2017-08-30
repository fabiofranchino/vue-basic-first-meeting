Vue.component('mychart', {
    template: '<svg><rect v-for="(item, index) in items" width="20" :x="index*21" :height="item.v" :y="50-item.v"></rect></svg>',
    props: ['items']
})




var vm = new Vue({
    el: '#app',
    data: {
        mydata: [
            {v:20},
            {v:40},
            {v:10},
            {v:26}
        ]
    }
})