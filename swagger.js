const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'contacts API',
    description: 'database storing contact info, and extra info for each person, using mongoDB, modifiable through get post put and delete',
  },
  host: 'https://cse341-3x4y.onrender.com',
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/contacts.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);