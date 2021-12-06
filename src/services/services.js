module.exports.handleSequelizeErrors = (err) => {
    if(err.name === "SequelizeForeignKeyConstraintError") { 
        return  `Foregin key error. Invalid fields: ${err.fields} `
    } else if(err.name === "SequelizeValidationError") {
        return err.errors[0].message    
    }
    else if(err.message) {
        return err.message 
    }
    else {
        console.error(err)
        return "Unkown err. Check console."
    }
}




