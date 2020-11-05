export default{
    namespaced:true,
    state:{ 
    list:[
        {msg:'11111',finish:true},
        {msg:'22222',finish:false},
    ],
    all:2
    },
   
    mutations:{
      changeAll(state,stateIndex){
        console.log(state)
        state.all = stateIndex
      },
      addList(state,params){
          state.list.push({msg:params.msg,finish:false})
      },
      delList(state,index){
        state.list.splice(index,1)
      },
      updateList(state,params){
        state.list[params.index].finish=true
      }
    },
    
    getters:{
      showList(state){
        // let result = state.list.filter((item)=>{
        //   return item.finish;
        // })
        // return result;
        let result =null
       switch (state.all) {
         case 0:
            result= state.list
           break;
          case 1:
             result =state.list.filter((item)=>{
              return item.finish
            })

          break;
          case 2:
             result =state.list.filter((item)=>{
              return item.finish==false
            })

          break;
         default:
           break;
       }
       return result 
      }
    },
    actions:{ 
      
    }
}