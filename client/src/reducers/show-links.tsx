// const showLinks = (state = [], action: any) => {
// let nextLinkId = 0;
const showLinks = (state = [], action: { type: string, results: { title: string, url: string, tags: string[] }[] }) => {
    switch (action.type) {
        case 'FETCH_LINK':
            // return [
            //     ...state,
            //     action.response
            // ];
            return action.results;
        // case 'ADD_LINK':
        //     return [
        //         ...state,
        //         {
        //             // id: nextLinkId++,
        //             title: action.websiteLink.title,
        //             url: action.websiteLink.url,
        //             tags: action.websiteLink.tags,
        //             liked: false
        //         }
        //     ];
        default:
            return state;
    }
};

// const WebsiteLinks = [
//     {
//         url: 'https://www.haha.com',
//         title: 'Haha',
//         tags: ['Haha', 'Funny'],
//         liked: false
//     },
//     {
//         url: 'https://www.test.com',
//         title: 'Test',
//         tags: ['Test', 'Experiment'],
//         liked: false
//     },
//     {
//         url: 'https://www.acceleratedhk.com',
//         title: 'Gordon',
//         tags: ['Gordon', 'AccelerateHK', 'Funny'],
//         liked: false
//     }
// ];

export default showLinks;