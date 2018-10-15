let defaultCity = '广州'
let defaultID = '0001'
try{
  if(localStorage.city){
    defaultCity = localStorage.city
  }
  if(localStorage.datailID){
    defaultID = localStorage.datailID
  }
}catch(e){}

export default {
  city: defaultCity,
  detailID: defaultID,
  scroll: ''
}
