import axios from '../../../lib/axios.js';

export async function getStaticProps(){
    const response = await axios.get("lxgaming/public/api/agent");
    const markets = await response.data;
    // const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // const dataUsers = await response.json();
  
    return {
      propss: {
        markets,  
      },
    }
  }