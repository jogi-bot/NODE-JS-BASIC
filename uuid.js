//universal uniq identifier
const {v4:uuidv4} = require('uuid')
const uuid = uuidv4()
console.log(uuid); 
//2695688f-eca1-4863-9df3-5785c963e0d4

for (let i = 0; i < 5; i++) {
  const uuid = uuidv4();
  console.log(uuid);
}


//ac29212b-5a00-428f-9111-7d0d35d0b7c6
// eef6452e-817e-49dd-a6ae-e7b1a1fba74a
// 1303d30d-2686-42f8-852c-89d1a454cf51
// b7404314-3054-4b4f-86db-2c0df3f2b452
// 7e08408f-c6a9-4561-9669-d3b428a4996a
const record =  (data) => {
 const result = {
     id:uuidv4(),
     Data:data
  }
  console.log(result);


}
record({name:"krunal-jogi", email:"jogikrunal9477@gmail.com"})
record({name:"jogi-krunal", email:"krunal49@gmail.com"})

// {
//   id: '4e6fd819-31df-474a-9b68-2b0142632fb1',
//   Data: { name: 'krunal-jogi', email: 'jogikrunal9477@gmail.com' }
// }
// {
//   id: '8eca3a0a-10ce-4d43-96db-4815053be1aa',
//   Data: { name: 'jogi-krunal', email: 'krunal49@gmail.com' }
// }

//READ ME FOR UNDERSTANDING ON UUID 
// The uuid package provides other functions as well, such as v1 for generating version 1 UUIDs based on the system's timestamp and MAC address, v3 and v5 for generating version 3 and 5 UUIDs based on a namespace and name, respectively. However, version 4 UUIDs generated by v4 are generally recommended for most use cases where uniqueness and randomness are required.

// Note that UUIDs are not meant to be sequential or sorted in any particular order. Their purpose is to provide a unique identifier across systems and ensure a negligible chance of collisions.