export const getShopData = async () => {
   
    return fetch('./mydata.json',{
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
      .then(response=>response.json())
  };