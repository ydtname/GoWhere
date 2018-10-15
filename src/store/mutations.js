export default{
  changeCity(state, city){
    state.city = city
    try{
      localStorage.city = city
    }catch(e){}
  },
  changeDetailID(state, ID){
    state.detailID = ID
    try{
      localStorage.detailID = ID
    }catch(e){}
  },
  changeScroll(state, val) {
    state.scroll = val
  }
}
