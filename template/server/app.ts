import * as Koa from 'koa';
import * as Router from 'koa-router';

const app = new Koa();
const router = new Router();

router.get('/api/hello', async function(ctx){
  ctx.body = {
    message: `Hello Angular`,
  };
});

app.use(router.routes());

app.listen(3000, () => {
  console.log('app started at http://localhost:3000');
});

export default app;
