const initialState = {
    item:[]
}

function CartReducer(state=initialState, action) {
    switch (action.type) {
        case 'ADD ITEM':
            return { ...state, items: [...state.item, action.payload] };
        case 'REMOVE ITEM':
            console.log(action.payload);

            return { ...state, item: state.items.filter(item => item.product.id != action.payload) };
        default:
            return state;
            
    }
}

export default CartReducer;