import axios from 'axios';

class Client {
  async get(url) {
      return await axios.get(url)
  }

  async post(url, data) {
      return await axios.post(url, data)
  }



  async put(url, data) {
      return await axios.put(url, data);

    }

    //mettre en stand by le user sans le supprimer
  async delete(url){
      return await axios.delete(url)
  }


}


export default Client