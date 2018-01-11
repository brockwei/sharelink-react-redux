const changeUrl = (state = { text: '', valid: false}, action: { type: string, text: string }) => {
    switch (action.type) {
        case 'CHANGE_URL':
            return action.text;
        default:
            return state;
    }
};

export default changeUrl;