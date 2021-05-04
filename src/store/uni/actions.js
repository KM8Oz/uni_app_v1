export default {
    sign_in:function(context, payload){
        context.commit('signIn', payload)
    },
    logout: function(context){
        context.commit("logout")
    },
    switch_student_type:function(context, payload){
      context.commit("switch_student_type", payload)
    }
}
