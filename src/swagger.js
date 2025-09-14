const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },

    openapi: "3.0.0",
    info: {
      title: "Proyecto 6 - API",
      version: "1.0.0",
      description: "API de usuarios y productos con autenticación",
    },
  },
  apis: ["./src/routes/*.js"], // toma la documentación desde tus rutas
};

const swaggerSpec = swaggerJSDoc(options);

function swaggerDocs(app) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

module.exports = swaggerDocs;
