Vue.component('my-comp', {
    template: '<h1>{{ dato.label }}</h1>',
    props: ['dato']
})

new Vue({
    el: '#app',
    data: {
        item:{
            label:'my long sentence'
        }
    }
})
