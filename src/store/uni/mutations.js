import * as stringSimilarity from 'string-similarity';
import { Notify, SessionStorage } from 'quasar';
import cookies from "js-cookie";
export default {
    signIn: function(state, payload){
      state.user = {
        tk: payload?.sstk,
        id: payload?.ssuid,
        un: payload?.ssun,
        auth: payload?.ssauth,
        is_student:payload?.is_student
      };
      state.menudefault = payload?.is_student ?  state.menus["student"] : state.menus["schoolboys"]
     cookies.set("ssid", JSON.stringify({...payload}))
    },
    logout:function(state){
      cookies.remove("ssid");
      state.user = {
        tk: null,
        id: null,
        un: null,
        auth: false,
      }
    },
    switch_student_type:function(state, payload){
     state.menudefault = payload ?  state.menus["student"] : state.menus["schoolboys"]
     state.user.is_student = payload;
    }
}
