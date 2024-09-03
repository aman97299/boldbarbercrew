import swaggerAutogen from 'swagger-autogen'

// const outputFile = './swagger_output.json'
// const endpointsFiles = ['./index.js']

// swaggerAutogen(outputFile, endpointsFiles)
const doc = {
    info: {
        title: 'My API',
        description: 'Description',
    },
    host: 'localhost:3000',
    schemes: ['http'],
};
const outputFile = './swagger_output.json'
const endpointsFiles = ['./index.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);