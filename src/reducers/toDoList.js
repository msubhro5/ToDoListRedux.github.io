const initialState = [];

const toDoList = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_DO_LIST":
            return state = [
                ...state,
                {
                    id: action.payload.id,
                    mytask: action.payload.task                    
                }
            ]


        case "DELETE_TO_DO_LIST":
            return state = state.filter((cval)=>{
                return action.payload !== cval.id
            })

        default: return state;
    }
}

export default toDoList;