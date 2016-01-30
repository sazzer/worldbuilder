import {createServer} from './server';

const app = createServer();

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
