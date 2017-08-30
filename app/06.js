var vm = new Vue({
    el: '#app',
    data: {
        items:[
            {label:'a', show:true},
            {label:'b', show:true},
            {label:'c', show:false},
            {label:'d', show:true}
        ]
    },
    methods:{
        hide: function(item, event){
            console.log('hide', item, event)
            item.show = false
        }
    }
})
