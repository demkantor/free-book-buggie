const contacts = (state = [], action) => {
    switch (action.type) {
        case 'SET_CONTACTS':
            return action.payload;
        case 'UPDATE_CONTACTS':
            return action.payload
        default:
            return state;
    }
};

export default contacts;