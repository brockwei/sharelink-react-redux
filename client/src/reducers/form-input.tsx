const formInput = (state = {title: '', url: '', tags: ''}, action: any) => {
    switch(action.type) {
        case 'CHANGE_TITLE':
            return action.text;
        case 'CHANGE_URL':
            return action.text;
        case 'CHANGE_TAGS':
            return action.text;
        default:
            return state;
    }
}

export default formInput;