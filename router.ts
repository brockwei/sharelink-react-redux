import { Response } from "express";

// Redis
import client from './redis';

export default (express: any) => {
    const router = express.Router();

    router.get('/links', (req: Request, res: Response) => {
        client.lrange('websitelinks', 0, -1, function (err: Error, data: string[]) {
            if (err) { return console.log(err); }
            // console.log(typeof data);
            let data2: { title: string, url: string, tags: string[] }[] = [];
            for (var i in data) {
                data2.push(JSON.parse(data[i]));
                // console.log(JSON.parse(data[i]));
            }
            res.json(data2);
        });

    });
    router.post('/links', (req: Request, res: Response) => {
        // console.log(JSON.stringify(req.body));
        client.rpush('websitelinks', JSON.stringify(req.body), function (err: Error, data: string[]) {
            if (err) { return console.log(err); }
            // 
            client.lrange('websitelinks', 0, -1, function (err: Error, data: string[]) {
                if (err) { return console.log(err); }
                // console.log(typeof data);
                let data2: { title: string, url: string, tags: string[] }[] = [];
                for (var i in data) {
                    data2.push(JSON.parse(data[i]));
                    // console.log(JSON.parse(data[i]));
                }
                res.send(data2);
            });
            // 
        })

    });

    return router;
}



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