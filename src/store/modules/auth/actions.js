import { projectAuth } from "../../../firebase/config";

export default {
  async login(context, payload) {
    try {
      const response = await projectAuth.signInWithEmailAndPassword(
        payload.email,
        payload.password
      );
      console.log(response);

      localStorage.setItem('userId', response.user.uid);
      localStorage.setItem('userName', response.user.displayName);

      context.commit("setUser",  {
        userId: response.user.uid,
        userName: response.user.displayName
      })
    } catch (error) {
      console.log(error.message);
      error.message = "Incorrect login credentials";
    }
  },
  async signup(context, payload) {
    try {
      const response = await projectAuth.createUserWithEmailAndPassword(
        payload.email,
        payload.password
      );
      const displayName = payload.displayName;
      if (!response) {
        throw new Error("Failed to authenticate");
      }

      await response.user.updateProfile({ displayName });

      context.commit("setUser", response);
      console.log(response.user);
    } catch (error) {
      console.log(error.message);
    }
  },
  tryLogin(context){
    const userId = localStorage.getItem('userId')
    const userName = localStorage.getItem('userName')

    if(userId) {
        context.commit('setUser', {
            userId: userId,
            userName: userName
        })
    }
  },
  logout(context) {

    localStorage.removeItem('userId')
    localStorage.removeItem('userName')
    
      context.commit('setUser', {
        userId: null,
        userName: null
      })
  
  }
};
