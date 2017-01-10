import express from 'express';
import validateInput from '../shared/validations/signup';

let router = express.Router();


router.post('/', (req,res)=> {
    setTimeout(function() {
        const {errors,isValid} = validateInput(req.body);
        if(isValid){
            res.json({success:true});
        } else {
            res.status(400).json(errors);
        }
    }, 300);
});


export default router;
