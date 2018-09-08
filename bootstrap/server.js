import restify from 'restify';


export default () => {
  const server = restify.createServer();
  const port = process.env.port || process.env.PORT || 3978;
  server.listen(port, () => {
     console.log('%s listening to %s', server.name, server.url);
  });

  return server;
}
