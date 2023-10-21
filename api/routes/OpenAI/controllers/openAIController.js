const openai=require('../config/openaiConfig.js');


//generateMeta(title).then( userToken );

const generateMeta=async(req,res) =>{

    const {inputValue1,
    inputValue2,inputValue3 }=req.body;

    console.log("here openai/meta");
    const stream= await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: 'user',
                content: `create a legal documet format for topic ${inputValue1} for company ${inputValue2} with requirements ${inputValue3}`
            }
        ],
       stream  : true,
       max_tokens: 200

    });

  
    var response="";
    for await (const part of stream) {
        //console.log(part.choices[0].delta);

        response =response +part.choices[0].delta.content;

    }

    res.status(200).json({
        description: response
    })
    console.log(response);
}

// function userToken(){
//     return response;

// };
module.exports={ generateMeta};
//module.exports={ userToken};