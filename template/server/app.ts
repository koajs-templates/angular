import * as express from 'express';

const app = express();

app.get('/api/hello', function(req, res){
  res.json({
    message: "Hello Angular"
  });
});

app.listen(3000, () => {
  console.log('app started at http://localhost:3000');
})

export default app;
