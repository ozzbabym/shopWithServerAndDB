export default (state, action) => {
    switch (action.type) {
        
        case 'GET_GOODS':
            return { ...state, goods: action.payload }
        case 'IS_AUTH':
            return { ...state, isAuth: action.payload }
        case 'SET_NAME':
            return { ...state, name: action.name }
        case 'NEW_PRODUCT':
            return { ...state, goods: [...state.goods, action.product] }
        case 'DEL_PRODUCT':
            const products = state.goods.filter(item=>item.id !== action.id) 
            return { ...state, goods: products }
        case 'UPDATE':{
            const productsUpdate = state.goods.map(element => {
                if(element.id === action.item.id){
                   return element = action.item
                }else{
                    return element
                }
            })
            return { ...state, goods: productsUpdate }
            }
        default:
            return state
    }
}
