const router = require('express').Router();
const validate = require('express-jsonschema').validate;
const lagrange_controller = require('../controllers/lagrange_controller').lagrange_controller;

const LagrangeSchema = {
    type: "object",
    properties: {
        number: {
            type: "integer",
            minimum: 0,
            exclusiveMinimum: true,
            required: true
        }
    }
  };

router.post('/', validate({body: LagrangeSchema}), lagrange_controller);

module.exports = router;
