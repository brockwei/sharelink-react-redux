import { Dispatch } from 'redux';

export const changeTitle = (text: string) => {
    let valid = false;
    if (text.length > 0) { valid = true; }
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'CHANGE_TITLE',
            text: {
                text: text,
                valid: valid
            }
        });
    };
};
export const changeUrl = (text: string) => {
    let valid = false;
    if (/http[s]{0,1}:\/\/[w]{0,3}\.*\w+\.\w+/gi.test(text)) { valid = true; }
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'CHANGE_URL',
            text: {
                text: text,
                valid: valid
            }
        });
    };
};
export const changeTags = (text: string) => {
    let valid = false;
    if (text.length > 0) { valid = true; }
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'CHANGE_TAGS',
            text: {
                text: text,
                valid: valid
            }
        });
    };
};
export const searchLink = (text: string) => {
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'SEARCH_LINK',
            text
        });
    };
};
export const addLink = (websiteLink: { title: string, url: string, tags: string[] }) => {
    return (dispatch: Dispatch<Object>) => {
        // console.log(websiteLink);
        fetch('http://localhost:8080/links', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // body: websiteLink
            body: JSON.stringify(websiteLink)
        })
            .then(function (res: Response) {
                // console.log(res);
                return res.json();
            })
            .then(function (results: { title: string, url: string, tags: string }[]) {
                // console.log(results);
                // dispatch({
                //     type: 'ADD_LINK',
                //     websiteLink
                // });
                dispatch({
                    type: 'FETCH_LINK',
                    results
                });
            });
    };
};
export const fetchLink = () => {
    return (dispatch: Dispatch<Object>) => {
        fetch('http://localhost:8080/links')
            .then((response) => {
                return response;
            }).then((response) => response.json())
            .then((results) => {
                // console.log(results);
                dispatch({
                    type: 'FETCH_LINK',
                    results
                });
            });
    };
};