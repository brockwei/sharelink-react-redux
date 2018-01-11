const searchLink = (state = '', action: { type: string, text: string }) => {
    switch (action.type) {
        case 'SEARCH_LINK':
            return action.text;
        default:
            return state;
    }
};

export default searchLink;