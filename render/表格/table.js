Vue.component('vTable',{
    props:{
        columns:{
            type:Array,
            default:function(){
                return [];
            }
        },
        data:{
            type:Array,
            default:function(){
                return [];
            }
        }
    },
    data:function(){
        return {
            currentColumns:[],
            currentData:[]
        }
    },
    methods:{
        makeColumns:function(){
            this.currentColumns = this.columns.map(function(col,index){
                col._sortType = 'normal';
                col._index = index;
                return col;
            })
        },
        makeData:function(){
            this.currentData = this.data.map(function(row,index){
                row._index = index;
                return row;
            })
        }
    },
    mounted(){
        this.makeColumns();
        this.makeData();
    },
    render:function(h){
        var ths = [];
        var trs = [];
        return h('table',[
            h('thead',[
                h('tr',ths)
            ]),
            h('tbody',trs)
        ])
    }
})