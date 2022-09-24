// import axios from  'axios' ; 


// const url = 'http://localhost:3001/course/' ; 

    
// class coursee {
//    static getCourse(){   //we dont have to initiate  we use static so we dont need to call the function with new kima java twli taaytelha toul b coursee.getcourse
//     return new Promise(async (resolve, reject) => {
//             try {
//                 const res = await axios.get(url);
//                 const data = res.data;
//                 resolve(
//                     data.map(course =>({   // name it whatever you want heya juste bch tconecti ma l backend w temchitaml loup through l courses
//                         ...course , // spread operator that will take whatever in the courses
//                          createdAt: new Date(data.createdAt)
//                     }))
//                 )
//             } catch (error) {
//                reject(error) ;
//             }
//     })
//    }



//    static createCourse(text){
//       return axios.post(url,{
//           text 
//       })
    
//    }


//    static deleteCourse(id){
//        return axios.delete(`${url}${id}`)
//    }

// }

// export default coursee ;    