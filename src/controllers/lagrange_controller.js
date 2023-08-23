const { doItLikeLagrange } = require('../services/lagrange_algorithm');

const lagrange_controller = async (req, res, next) => {
  try {
    let number = req.body.number
    
    lagrange_descomposition = await doItLikeLagrange(number);

    res.status(200).json({
      "message": "La función lagrange se ha ejecutado correctamente",
      "lagrange": lagrange_descomposition
      }
    )
    
  } catch (error) {
    res.status(error.status).json(error.message)
  }
};

module.exports = {
  lagrange_controller
  };