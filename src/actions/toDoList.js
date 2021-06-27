export const Add_toDoList = (mytask)=>{
    return{
        type: "ADD_TO_DO_LIST",
        payload:{
            id: Math.floor(Math.random()*1000),
            task: mytask
        }
    }
}
export const Delete_toDoList = (del_id)=>{
    return{
        type: "DELETE_TO_DO_LIST",
        payload: del_id
    }
}