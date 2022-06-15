import axios from "axios";
import { nanoid } from "nanoid";
// 人员管理功能相关的配置
export default {
    namespaced: true,
    actions: {
        addPersonWang(context,value){
            if(value.name.indexOf('王') === 0){
                context.commit('ADD_PERSON',value)
            }else{
                alert('你添加的人不姓王')
            }
        },
        addPersonServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response=>{
                    context.commit('ADD_PERSON',{id:nanoid(),name:response.data})
                },
                reason=>{
                    alert(reason.message)
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, personObj) {
            console.log('mutations中的ADD_PERSON被调用了');
            state.personList.unshift(personObj)
        }
    },
    state: {
        personList: [
            { id: '001', name: '巧遇' }
        ]
    },
    getters: {
        firstPersonName(state){
            return state.personList[0].name
        }
    }
}