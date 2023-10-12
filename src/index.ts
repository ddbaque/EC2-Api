import app from "./app";
import {PORT} from './config';

app.listen(PORT, () => {
    console.log(`👿 server listen on port ${PORT} 👿`)
});
