export const Types = {
  SIGN_IN: "SIGN_IN",
  SIGN_IN_FAIL: "SIGN_IN_FAIL",
  SIGN_OUT: "SIGN_OUT",
  SIGN_OUT_FAIL: "SIGN_OUT_FAIL",
} 

export const signIn = ()=> async(dispatch) => {
  try{
      await window.gapi.auth2.getAuthInstance().signIn()
      dispatch({
      type: Types.SIGN_IN,
      payload: window.gapi.auth2.getAuthInstance().currentUser.get().getId()
  })
//window.gapi.auth2.getAuthInstance()
  }catch(error){
      console.log(error)
  dispatch({
      type: Types.SIGN_IN_FAIL
  })
  }
}

export const signOut = () => async(dispatch) =>{
  try{
      await window.gapi.auth2.getAuthInstance().signOut()
      dispatch({
          type: Types.SIGN_OUT
      })
  }catch(error){
      console.log(error);
      dispatch({
          type:Types.SIGN_OUT_FAIL
      })
  }


}