Vue.component('list', {
    template: '<ul><li v-for="item in items" v-if="item.show" v-on:click="hide(item, $event)">{{item.label}}</li></ul>',
    props: ['items'],
    methods:{
        hide: function(item, event){
            item.show = false
        }
    }
})


var vm = new Vue({
    el: '#app',
    data: {
        mydata:[
            {label:'a', show:true},
            {label:'b', show:true},
            {label:'c', show:false},
            {label:'d', show:true}
        ]
    }
})
