import axios from 'axios';
export const uploadExcel = async (data,api) =>{
  return await axios.post(`/eapi/upload/excel/${api}`,data)
    .then(res=>{
      console.log(res);
      return res;
    })
    .catch(err=>{
      console.log(err);
      return err;
    });
};
//'/api/download/excel/name2mail'

export const downloadExcel = (path,api) =>{
  axios.get(`/eapi/download/excel/${api}`)
    .then(res=>{
      console.log(res);
      return res;
    })
    .catch(err=>{
      console.log(err);
      return err;
    });
};

const api = {
  uploadExcel
};

export default api;
