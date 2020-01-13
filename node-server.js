const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const cors = require('cors')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

/**********************************************************************/

server.use(cors())
server.use(middlewares)
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.use('/customers', (req, res, next) => {
  if (req.method !== 'POST')
    next();
  else {
    console.log("Entro al primer middleware");
    validateCustomerMiddleware(req, res, next);
  }
})

server.use('/customers', (req, res, next) => {
  if (req.method !== 'POST')
    next();
  else {
    console.log("Entro al segundo middleware");
    transformCustomerData(req, res, next);
  }
})

server.use('/customers/:id', (req, res, next) => {
  if (req.method !== 'PUT')
    next();
  else {
    console.log("Entro al tercer middloeware");
    validateCustomerMiddleware(req, res, next);
  }
})

server.use(router)

/**********************************************************************/

server.listen(3001, () => {
  console.log('JSON Server is running')
})

/**********************************************************************/

const transformCustomerData = (req, res, next) => {
  const { body, body: { age, name, dni } } = req;
  req.body = { ...body, id: dni, name: name.toString(), dni: dni.toString(), age: parseInt(age) };
  console.log(req.body);
  next();
}

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