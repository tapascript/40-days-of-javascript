const jsonServer = require('json-server');
const fs = require('fs');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// ✅ GET /api/pizzahub → shop IDs
server.get('/api/pizzahub', (req, res) => {
  const db = JSON.parse(fs.readFileSync('db.json', 'utf-8'));
  const pizzas = db.pizzas || [];
  const shops = db.shops || {};
  const shopIds = [...new Set(pizzas.map(p => p.shopId).filter(shopId => shops[shopId]))];
  res.json(shopIds);
});

// ✅ POST /api/order → create a new order
server.post('/api/order', (req, res) => {
  const { pizzaId, beverageId } = req.body;

  if (!pizzaId || !beverageId) {
    return res.status(400).json({ error: 'pizzaId and beverageId are required' });
  }

  const dbFile = path.join(__dirname, 'db.json');
  const db = JSON.parse(fs.readFileSync(dbFile, 'utf-8'));

  const orders = db.orders || [];
  const newOrder = {
    id: orders.length + 1,
    pizzaId,
    beverageId,
    createdAt: new Date().toISOString()
  };

  orders.push(newOrder);
  //db.orders = orders;

  //fs.writeFileSync(dbFile, JSON.stringify(db, null, 2), 'utf-8');
  res.status(201).json(newOrder);
});

// ✅ Rewrite routes
server.use(
  jsonServer.rewriter({
    '/api/pizzahub/pizzas': '/pizzas',
    '/api/pizzahub/pizzas/:shopId': '/pizzas?shopId=:shopId',
    '/api/pizzahub/beverages/:pizzaid': '/beverages?pizzaId=:pizzaid'
  })
);

server.use(router);

server.listen(3000, () => {
  console.log('✅ JSON Server running at http://localhost:3000');
});