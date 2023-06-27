const joi = require('joi')

const schema = joi.object().keys({
    name:joi.string().alphanum().min(3).max(20),
    birthday: joi.number().integer().min(1970).max(2023),
});

const students ={
    name: 'krunal',
    birthday:2002
}
async function datavalidate(){

    try{
        const result = await schema.validate(students)
        console.log(result);
    }
    catch(error){
        console.error(error);

    }

}
datavalidate()

//{ value: { name: 'krunal', birthday: 2002 } }

//Read me first
// Well Joi supports all sorts of primitives as well as Regex and can be nested to any depth. Let’s list some different constructs it supports:

// string, this says it needs to be of type string, and we use it like so Joi.string()
// number, Joi.number() and also supporting helper operations such as min() and max(), like so Joi.number().min(1).max(10)
// required, we can say whether a property is required with the help of the method required, like so Joi.string().required()
// any, this means it could be any type, usually we tend to use it with the helper allow() that specifies what it can contain, like so, Joi.any().allow('a')
// optional, this is strictly speaking not a type but has an interesting effect. If you specify for example prop : Joi.string().optional. If we don't provide prop then everybody's happy. However if we do provide it and make it an integer the validation will fail
// array, we can check wether the property is an array of say strings, then it would look like this Joi.array().items(Joi.string().valid('a', 'b')
// regex, it supports pattern matching with RegEx as well like so Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)

//joi understanding by example 
const express = require("express");
const joi = require("joi");
const app = express();
app.use(express.json());
const port = 3000;
app.post("/", async (req, res) => {
  const { body } = req;
  const blogschema = joi.object().keys({
    title: joi.string().required(),
    discription: joi.string().required(),
    authorId: joi.number().required(),
  });

  try {
    await blogschema.validateAsync(body);
    res.json({ message: "resourse-created" });
  } catch (error) {
    res.status(422).json({
      message: "invalid-request",
      error: error,
    });
  }
});
app.listen(port, () => {
  console.log(`you are in ${port}`);
});

//depending on api call out-put
//if sucsees then  message: "resourse-created"

//if fail then  message: "invalid-request",
     // error: with error 
