<template>
    <div class="desktop_header_wrapper">
        <div class="top_desk_header">
         <div class="left_top_desk_header">
         <q-btn square flat icon="menu" color="black" class="menu_btn"></q-btn>
          <q-btn square  flat label="РУС" color="black"></q-btn>
           <q-btn square  flat label="ENG" color="black"></q-btn>
           <div class="phone_numbers">
           <span class="number">
           +7 (495) 249-5249 Контакт-центр
           </span>
           <span class="email">
           example@domain.com
           </span>
           </div>
         </div>
          <div class="right_top_desk_header">
          <q-item clickable v-ripple class="item">
        <q-item-section avatar>
          <q-icon name="visibility" />
        </q-item-section>
        <q-item-section>Версия для слабовидящих</q-item-section>
      </q-item>
      <q-btn v-if="!uni.user.auth"  class="login_btn" square flat label="Войти" @click="login_dialog = true">
      </q-btn>
         <q-input class="search_input" dense borderless
         input-class="search_input_inside" v-model="search" label="поиск"  type="search">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
      <!-- <q-btn class="profile_btn" flat square :label="uni.user.auth ? uni.user.un : 'Личный кабинет'" /> -->
         <div class="profile_btn row " v-if="!uni.user.auth">
            <toggle-button class="self-center q-ma-xs " v-model="is_student" :width="100" :color="{checked: '#03506f', unchecked: '#0a043c', disabled: '#CCCCCC'}" :sync="true" :labels="{checked: 'Студентам', unchecked: 'школьникам'}"/>
            
         </div>
         <q-btn v-if="uni.user.auth" class="profile_btn" flat square :label="uni.user.auth ? uni.user.un : 'Личный кабинет'" />
      <q-btn v-if="uni.user.auth" color="red"  class="login_btn" square flat label="logout" @click="logout">
      </q-btn>
         </div>
        </div>
        <div class="bottom_desk_header">
     
         <div class="social_media">
          <img class="logo_header" basic alt="none" src="../assets/logo.png" />
          <div class="social_links">
           <q-icon name="facebook" color="white"></q-icon>
         <q-icon name="facebook" color="white"></q-icon>
         <q-icon name="facebook" color="white"></q-icon>
         <q-icon name="facebook" color="white"></q-icon>
          </div>
         </div>
            <div class="links_header">
       <ul class="menu_bottom">
            <li>
			    <a href="#">Наш университет</a>
            </li>
            <li>
			    <a  href="#">Организационная структура</a>
            </li>
        
            <li>
			    <a  href="#">Сведения об образовательной организации</a>
            </li>
        
            <li>
			    <a  href="#">Ученый совет</a>
            </li>
        
            <li>
			    <a  href="#">Наука и инновации</a>
            </li>
        
            <li>
			    <a  href="#">Международная деятельность</a>
            </li>
       </ul>
        </div>
        </div>
     
        <div class="d_header_menu">
                <transition
  appear
  enter-active-class="animated bounceInDown"
  leave-active-class="animated bounceInUp"
  v-if="trasition"
>
         <q-btn-group outline>
       <q-btn     v-for="(link, i) in uni.menudefault"  
    :key="i"  :label="link.name" :to="link.link" outline/>
 
       <!-- <q-btn outline  label="Студентам" />
      <q-btn outline  label="Выпускникам и партнерам" />
      <q-btn outline  label="Работникам и соискателям" />
      <q-btn outline  label="Дополнительное и бизнес-образование" />
     <q-btn outline  label="Есть вопросы? Задавайте!" /> -->
       </q-btn-group>
              </transition>
        </div>
       
        <q-dialog v-model="login_dialog">
        <div class="registration_dialog">
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
      <q-btn outline rounded color="#d8008c" label="sign"  @click="sign_in" class="col-4 q-ma-xs q-px-md" />
      <q-btn outline rounded color="#d8008c" @click="isSignIn = 1" label="back" class="col-4 q-ma-xs q-px-md"/>
      </div>
     </div>
     <div v-else-if="isSignIn === 1" class="sign_switch">
          <div class="self-center column justify-around q-mb-lg">
        <q-btn outline rounded  class=" q-ma-xs q-px-md" color="#d8008c" @click="isSignIn = 3" label="register" />
       <q-btn outline rounded  class=" q-ma-xs q-px-md" color="#d8008c" @click="isSignIn = 0" label="signIn" />
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
      <q-btn outline rounded color="#d8008c" label="register" @click="sign_up" class="col-4 q-ma-xs q-px-md" />
      <q-btn outline rounded color="#d8008c" @click="isSignIn = 1" label="back" class="col-4 q-ma-xs q-px-md"/>
      </div>
     </div>
        </div>
        </q-dialog>
    </div>
</template>
<script>
import {mapState } from "vuex";
export default {
    name: 'header',
    data(){
        return{
            search:null,
            isPwd:true,
            trasition:true,
            email:null,
            password:null,
            is_student:true,
            password2:null,
            isSignIn:1,
            login_dialog:false
        }
        },
        computed:{
        ...mapState(["uni"])
        },   
        watch:{
          is_student:function(val){
            this.$store.dispatch("uni/switch_student_type", val);
            this.trasition = false;
            this.$nextTick(()=>{
            this.trasition = true;
            })
          }
        },
        mounted(){
          // console.log(this.menu["schoolboys"])
          this.is_student = this.uni.user.is_student
        },
        methods:{
          template:function(){
            
          },
             validateEmail(email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        },
        logout:function(){
        this.$store.dispatch("uni/logout")
      },
          sign_in: async function(email, pass){

        this.$axios.post("login", {email:this.email, password:this.password}).then((result) => {
               
               const {is_student, email, id} = result.data.user
                this.$store.dispatch("uni/sign_in",{
                sstk: result.data.token,
                suid: id,
                ssun: email,
                ssauth: !!result.data.token,
                is_student: is_student
                })
                this.login_dialog = false
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
                this.login_dialog = false
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
<style lang="scss">
  .desktop_header_wrapper {
    min-height: 300px;
    height: 400px;
    max-height:550px;
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: 100%;
    align-items: center;
        overflow: hidden;
}
.top_desk_header {
  max-width: 1200px;
    width: 100%;
  height: 50px;
  display:flex; 
  flex-direction: row;
      justify-content: space-between;
    align-items: center;
 }
 .top_desk_header .q-btn {
  border-radius: unset;
 }
 .left_top_desk_header{
   height: 100%;
  display:flex; 
  flex-direction: row;
  justify-content: flex-start;
 }
 .left_top_desk_header .menu_btn{
        background: #00182a;
    border-radius: unset;
    color: #fff !important;
 }
.right_top_desk_header{
   height: 100%;
   max-height: 50px;
  display:flex; 
  flex-direction: row;
   justify-content: flex-end;
 }
.search_input_inside, .q-field__control, .q-field__append{
height: 100% !important;
}
.phone_numbers{
 display:flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
}
.bottom_desk_header{
    height:300px;
    max-width: 1200px;
    width: 100%;
    background:url(../assets/polygon-scatter-haikei.svg);
    position: relative;
    display:flex;
    flex-direction: row;
    justify-content:space-between;
}
.bottom_desk_header .social_media{
  width: 100%;
  max-width:300px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}
.bottom_desk_header .links_header{
width:100%;
max-width:300px;
max-height: 100%;
height: 100%;
right:3px;
padding-top:3%;
padding-right: 10px;
}
.links_header ul{
list-style: none;
    margin: 0;
    padding: 0;
    text-align: end;
}
.links_header ul>li>a{
color: #fff;
text-decoration: none;

}

.social_media .q-icon{
font-size: 30px;
height:40px;
width:40px;
}
.social_media .logo_header{
 height:150px;
 width:170px;
 max-width:300px;
 object-fit:cover;
}
.d_header_menu{
 max-width: 1200px;
 width:100%;
 height:100%;
 overflow:hidden;
 }
.d_header_menu .q-btn-group{
 border-radius:unset !important;
 display:flex;
width:100%;
height:100%;
justify-content:center;
 .q-btn{
    width:100%;
    height:100%;
 }
}
.d_header_menu span{
font-size: 12px !important;
}
.registration_dialog{
position: relative;
display:flex;
justify-content:center;
align-items: center;
max-height: 390px !important;
max-width:300px !important;
height:100%;
width:100%;
background:#fff;
border-radius:30px !important;
}
</style>