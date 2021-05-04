<template >
    <div class="drawer-sign">
     <div v-if="isSignIn === 0" class="sign_in">
       <q-input outlined rounded label="Email" v-model="email" class="q-my-xs "  :rules="[
                      (val) => (validateEmail(val) && val.length > 0) || 'Укажите email',
                    ]" > 
                     <template v-slot:append>
          <q-icon name="mail" />
        </template>
                    </q-input>
      <q-input outlined rounded label="password" :type="isPwd ? 'password' : 'text'"  v-model="password" class="q-my-xs" :rules="[ val => val.length >= 8 || 'Please use minimum 8 characters']">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
       <div class="row justify-around q-mb-lg">
      <q-btn outline rounded color="primary" label="sign"  @click="sign_in" class="col-4 q-ma-xs" />
      <q-btn outline rounded color="primary" @click="isSignIn = 1" label="back" class="col-4 q-ma-xs"/>
      </div>
     </div>
     <div v-else-if="isSignIn === 1" class="sign_switch">
          <div class="self-center column justify-around q-mb-lg">
          <toggle-button class="self-center q-ma-xs" v-model="is_student" :width="140" :color="{checked: '#03506f', unchecked: '#0a043c', disabled: '#CCCCCC'}" :sync="true" :labels="{checked: 'Студентам', unchecked: 'школьникам'}"/>
        <q-btn outline rounded  class=" q-ma-xs" color="primary" @click="isSignIn = 3" label="register" />
       <q-btn outline rounded  class=" q-ma-xs" color="primary" @click="isSignIn = 0" label="signIn" />
          </div>
     </div>
     <div v-else class="sign_up">
  <!--
 <q-input outlined rounded v-model="username" label="username"  class="q-my-xs"   :rules="[ val => val.length >= 5 || 'Please use minimum 5 characters']">
   <template v-slot:append>
          <q-icon name="avatar" />
        </template>
 </q-input> -->
       <q-input outlined rounded label="Email" v-model="email" class="q-my-xs"  :rules="[
                      (val) => (validateEmail(val) && val.length > 0) || 'Укажите email',
                    ]" > 
                     <template v-slot:append>
          <q-icon name="mail" />
        </template>
                    </q-input>
                     <q-input outlined rounded label="password" :type="isPwd ? 'password' : 'text'"  v-model="password" class="q-my-xs" :rules="[ val => val.length >= 8 || 'Please use minimum 8 characters']">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
       <q-input outlined rounded label="repeat password" :type="isPwd ? 'password' : 'text'"  v-model="password2" class="q-my-xs" :rules="[ val => val.length >= 8 || 'Please use minimum 8 characters']">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <toggle-button class="self-center q-my-xs" v-model="is_student" :width="140" :color="{checked: '#03506f', unchecked: '#0a043c', disabled: '#CCCCCC'}" :sync="true" :labels="{checked: 'Студентам', unchecked: 'школьникам'}"/>
      <div class="row justify-around q-mb-lg">
      <q-btn outline rounded color="primary" label="register" @click="sign_up" class="col-4 q-ma-xs" />
      <q-btn outline rounded color="primary" @click="isSignIn = 1" label="back" class="col-4 q-ma-xs"/>
      </div>
     </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    props:{
        auth:{
            type: Boolean
        }
    },
     model: {
      prop: 'auth',
      event: 'auth'
  },
    data:()=>({
       isSignIn:1,
       isPwd:true,
       email:null,
       password:null,
       password2:null,
       is_student:false,
       username:null
    }),
      watch:{
          is_student:function(val){
            this.$store.dispatch("uni/switch_student_type", val);
            this.trasition = false;
            this.$nextTick(()=>{
            this.trasition = true;
            })
          }
        },
     computed: {
        ...mapState(["uni"]),
    },
    methods:{
        validateEmail(email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        },
        verify:async function(){
            return true
        },
        sign_in: async function(email, pass){

        this.$axios.post("login", {email:this.email, password:this.password}).then((result) => {
               const { email, id} = result.data.user
                this.$store.dispatch("uni/sign_in",{
                sstk: result.data.token,
                suid: id,
                ssun: email,
                ssauth: !!result.data.token 
                })
          }).catch((err) => {
              if(err) {
                  console.log(err)
                  this.$q.notify({
                 type:"warning",
                 message:"faild: try again"
             })  }
          });
        },
        sign_up:async function(){
               let array = [!!this.email,!!this.password, !!this.password2];
           console.log(array.indexOf(false));
          if(array.indexOf(false) !== -1){
              this.$q.notify({
              type:"warning",
              message:"сначала заполните все поля"
            })
        
          } else if (this.password != this.password2){
          this.$q.notify({
              type:"warning",
              message:"пароли не идентичны"
            })
          } else  {
            this.$axios.post("register", {email:this.email,is_student:this.is_student, password:this.password, password2:this.password2}).then((result) => {
                 const { email, id} = result.data.user
                this.$store.dispatch("uni/sign_in",{
                sstk: result.data.token,
                suid: id,
                ssun: email,
                ssauth: !!result.data.token 
                })
          }).catch((err) => {
                if(err) {
                  console.log(err);
                    this.$q.notify({
                 type:"warning",
                 message:"faild: электронная почта уже существует"
             })
             }
          });
          }
        }
    }
    
}
</script>
<style >
    
</style>