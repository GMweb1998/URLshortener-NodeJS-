const express= require('express');
const router = express.Router();

const Url = require('../models/Url');

// @route GET /:code
// @desc  Redirect to long/original URL

router.get('/:code',async (req,res)=>{
    try{
        const url = await Url.findOne({ urlCode: req.params.code});

        if(url){

            console.log("url from db :"+url);
            return res.redirect(url.longUrl);
        }else{
            console.log("url from db :"+url);
            return res.status(404).json('No Url found');
        }
    }catch(err){
        console.error(err);
        res.status(500).json('Server error');   
    }
});
module.exports = router;
