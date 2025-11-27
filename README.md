# E-Commerce Backend (Express + MongoDB + Mongoose)

Lightweight backend for a portfolio e-commerce demo built with Node.js, Express, Mongoose and JWT authentication.

## Quick start

1. Install dependencies (run inside the `backend` folder)
```sh
npm install
```

2. Create a `.env` file in `backend/` with at least:
```
MONGO_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_jwt_secret
PORT=3000
```

3. Start the server
```sh
npm start
# or
node index.js
```
Server default port is 3000 (see `index.js`).

## Project structure (important files)
- `index.js` — application entry, connects to MongoDB with Mongoose and starts the server
- `routes/product-route.js` — product-related routes
- `routes/auth-route.js` — authentication routes (register / login)
- `schema/product-schema.js` — Mongoose product schema
- `schema/auth-schema.js` — Mongoose user/auth schema
- `controllers` — business logic for routes
- `seed.js` — (if present) seeder for example products
- `.env` — environment variables (not checked into source control)

## Environment & MongoDB
- This project uses Mongoose (an ODM). You do not need the `mongodb` package unless you want to use the native MongoDB driver directly.
- Ensure `MONGO_URI` points to a running MongoDB instance (local or Atlas). Example local URI: `mongodb://localhost:27017/ecommerce`.

## API (overview)
Authentication
- POST /api/auth/register — register a user
- POST /api/auth/login — login and receive a JWT

Products
- GET /api/products — list products
- POST /api/products/product — create a product
- PUT /api/products/:id — update a product
- DELETE /api/products/:id — delete a product

(See route files in `routes/` for exact handlers and payloads.)

## Example requests

Register:
```sh
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"test","email":"a@b.com","password":"pass"}'
```

Login:
```sh
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"a@b.com","password":"pass"}'
```

Get products:
```sh
curl http://localhost:3000/api/products
```

Create product:
```sh
curl -X POST http://localhost:3000/api/products/product \
  -H "Content-Type: application/json" \
  -d '{"title":"New Product","description":"Desc","price":10,"category":"General","brand":"Brand","stock":10}'
```

## Notes
- Keep `.env` out of version control.
- If only using Mongoose, uninstalling an extra `mongodb` package is safe: `npm uninstall mongodb`.
- Logs and startup behavior are defined in `index.js`. If DB connection fails the process will exit.
