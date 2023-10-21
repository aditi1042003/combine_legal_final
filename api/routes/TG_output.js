var express = require("express");
//const {generateMeta }=require('./OpenAI/controllers/openAIController')
//const app2=express();

//--------------------------------------------------------------------------
//step10: import the processing file here which is connecting to gpt


var router = express.Router();
const {generateMeta }=require('./OpenAI/controllers/openAIController');

router.get("/", function(req, res, next) {
    res.send("API is working get properly");
});

//--------------------------------------------------------------------
//step11: creating a post request to the output
router.post("/",generateMeta);

// router.post("/", function(req, res, next) {
//     console.log(req.body);
//     let gptResponse=generateMeta("NDA");
//     //gptResponse=userToken;
//     console.log("API post working properly");
//     console.log("hello" +gptResponse);
//     res.send(gptResponse);
    
//     // res.render("Result/Result.ejs",{
//     //     Document_gen : gptResponse
//     // });
   
// });

module.exports = router;