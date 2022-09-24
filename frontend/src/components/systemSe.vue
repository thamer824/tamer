<template>
    <div class="container">
        <h1>latest</h1>
        


    </div>

</template>

<script>

import axios from 'axios';

export default {


 async data(){

try {
    
let response = await axios.get("http://localhost:3001/course/");
console.log(response);
return {
products:response.products
}



} catch (err) {
    return console.error(err)
}

 }


};

</script>