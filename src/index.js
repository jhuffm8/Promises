// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

// async function getUserData(id) {
//   const dbs = {
//     db1: db1,
//     db2: db2,
//     db3: db3,
//   };
//   const resultCentral = await central(id);
//   const returnedValue = await dbs[resultCentral](id);
//   const v = await vault(id);
//   console.log(returnedValue);
// }

// getUserData(2);

// const getUserData = (id) => // promise method
//   new Promise((resolve) => {
//     const dbs = {
//       db1: db1,
//       db2: db2,
//       db3: db3,
//     };
//     central(id).then((returnedValue) => {
//       console.log(returnedValue);
//     });
//     db1(id).then((returnedValue) => {
//       console.log(returnedValue);
//     });
//     db2(id).then((returnValue) => {
//       console.log(returnValue);
//     });
//     db3(id).then((returnValue) => {
//       console.log(returnValue);
//     });
//     vault(id).then((returnedValue) => {
//       console.log(returnedValue);
//     });
//   });

// function getUserData(id) {
//   const dbs = {
//     db1: db1,
//     db2: db2,
//     db3: db3,
//   };

//   Promise.all([central(id), vault(id)])
//     .then(([resultCentral, rVault]) => {
//       return Promise.all([dbs[resultCentral](id), rVault]);
//     })
//     .then(([dbResult, v]) => {
//       console.log(dbResult);
//       console.log(v);
//     })
//     .catch((err) => console.error(err));
// }

// getUserData(6);

async function getUserData(id) {
  // async method
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };

  const database = await central(id);
  // console.log(database);
  const data = await dbs[database](id);
  // console.log(data);
  const v = await vault(id);
  // console.log(v);

  let obj = { id, ...data, ...v };
  console.log("final", obj);
  return obj;
}
getUserData(6);
