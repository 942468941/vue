var app = new Vue({
    el:'#app',
    data:{
        columns:[
            {
                title:'姓名',
                key:'name'
            },
            {
                title:'年龄',
                key:'age',
                sortable:true
            },
        ],
        data:[
            {
                name:'王小明',
                age:17,
                birthday:'2002-10-10',
                address:'北京'
            }
        ]
    }
})