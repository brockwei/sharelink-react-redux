const changeTags = (state = { text: '', valid: false}, action: { type: string, text: string }) => {
    switch (action.type) {
        case 'CHANGE_TAGS':
            return action.text;
        default:
            return state;
    }
};

export default changeTags;