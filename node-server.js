const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const validateCustomerMiddleware = (req, res, next) => {
  const { body, body: { age, name, dni } } = req;

  console.log("Data: ", body);

  let invalidData = {
    error: false,
    validation: {}
  };

  if (!name || name.length < 8) {
    invalidData.error = true;
    invalidData.validation.name = 'Debe tener al menos 8 caracteres.';
  }

  if (!age || age < 13) {
    invalidData.error = true;
    invalidData.validation.age = 'Debe tener al menos 13 años.'
  }

  if (!(dni && Number.isInteger(Number(dni)) && dni.length === 8)) {
    invalidData.error = true;
    invalidData.validation.dni = 'Debe tener 8 numeros.'
  }

  if (invalidData.error) {
    return res.send(invalidData);
  } else {
    //body.id = dni;
    next();
  }
};

server.use('/customers', (req, res, next) => {
  if (!(req.method === 'POST' || req.method === 'PUT'))
    next();
  else
    validateCustomerMiddleware(req, res, next);
})

server.use('/customers/:id', (req, res, next) => {
  if (!(req.method === 'POST' || req.method === 'PUT'))
    next();
  else
    validateCustomerMiddleware(req, res, next);
})

server.use(middlewares)
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(router)

server.listen(3001, () => {
  console.log('JSON Server is running')
})