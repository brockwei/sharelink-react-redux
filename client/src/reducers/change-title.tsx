const changeTitle = (state = { text: '', valid: false}, action: { type: string, text: string }) => {
    switch (action.type) {
        case 'CHANGE_TITLE':
            return action.text;
        default:
            return state;
    }
};

export default changeTitle;