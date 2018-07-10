import axios from 'axios';
axios.defaults.baseURL='../../static/json/'
 export var getCaiList = () =>{
   return    axios.get('cai.json').then((res)=>{
    return  res.data;
   })
 }
getCaiList()
// export var getNewList
export var getfilmList = () =>{
  return    axios.get('cai1.json').then((res)=>{
    return  res.data;
  })
}
getfilmList()

export var getmineList = () =>{
  return    axios.get('newslist.json').then((res)=>{
    return  res.data;
  })
}
getmineList()
