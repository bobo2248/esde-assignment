var validator=require('validator');

var validationFn={

    validateRegister:function(req,res,next){

       //Validation code to check register form input values
       //return response with status 500 if validation fails
    },

    validateUserInput: function (req, res, next) {

        var userid = req.params.userid;
        //check that userid matches a valid number.
                reUserid = new RegExp(`^[A-Za-z0-9]`);
                
        
                if (reUserid.test(userid)) {
                    next();
                } else {
        
                    res.status(400);
                    res.send(`{"Message":"Error!!"}`);
                }
        
   //Validation code to check userid from req.params

       //return response with status 500 if validation fails

},
    sanitizeResult:function(result){

        //Sanitize each record’s values from the database result        
        
    }


}

module.exports=validationFn;
