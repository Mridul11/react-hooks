
const AgeReducer = (state, action) => {
    switch(action.type){
        case "INCREMENT":
            return {...state, age: state.age + 1 };
        case "DECREMENT":
            return {...state, age: state.age - 1 }; 
        default: 
            return state ; 
    }
}

export default AgeReducer ;