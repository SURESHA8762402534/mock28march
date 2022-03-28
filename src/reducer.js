const initial = {
    data : {}
}

export const reducer = (state = initial, action)=>{
    const newState = {...state}
    switch(action.type){
        case "ADD":
            newState.data = action.payload;
            // console.log(newState.data);
            break;
            default:
                break;
    }
    return newState
}