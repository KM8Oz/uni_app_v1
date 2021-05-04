<template>
    <div class="app-header" :style="`background-image:url(${this.background})`">
       <q-toolbar class="toolbar">
        
          <q-btn flat @click="drawer = !drawer" rounded icon="menu" color="white" />
                  <q-input
        v-model="search"
        debounce="300"
        standout
        rounded
        input-class="text-white q-px-xs"
        placeholder="Search"
        class="fit q-ma-xs"
      >
        <template v-slot:append> 
          <q-icon name="search" color="white"/>
        </template>
          <template v-if="search" v-slot:prepend>
          <q-icon name="cancel" @click.stop="search = null" class="cursor-pointer" />
        </template>
      </q-input>
        </q-toolbar>
        <q-drawer
        v-model="drawer"
        :width="200"
        :breakpoint="400"
        class="header-drawer"
        content-class="header-drawer-content"
      >
        <q-scroll-area v-if="uni.user.auth" style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
          <div class="text-weight-bold text-center">{{uni.user.un}}</div>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                Inbox
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                Star
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                Send
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts"/>
              </q-item-section>

              <q-item-section>
                Drafts
              </q-item-section>
            </q-item>
             <div class="h-100 row justify-center">
             <q-btn @click="logout" label="logout" outline color="red" />
             </div>
          </q-list>
        </q-scroll-area>
        <div class="drawer-sign-wrapper" v-else>
         <m-sign type="sign" />
        </div>
        <q-img class="absolute-top header-wall" src="../assets/angryimg.png" style="height: 150px" @click="drawer = !drawer">
        </q-img>
          <div class="header-avatar bg-transparent">
            <q-avatar size="56px" class="q-mb-sm ">
              <img v-if="uni.user.auth" :src="uni.user.avatar">
              <q-icon name="add" color="black"/>
            </q-avatar>
            
          </div>
      </q-drawer>
        <q-expansion-item
      v-model="expanded"
      class="blured"
    >
          <q-carousel
      v-model="newsIndex"
      swipeable
      animated
      padding
      infinite
      ref="slider"
      navigation
      navigation-icon="radio_button_unchecked"
      class="header-carousel text-white "
      :autoplay="true"
       transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
    <q-carousel-slide v-for="(newsItem, i) in news" :key="i" :name="i" class="text-center header-slider">
        <q-scroll-area class="fit" :bar-style="{display:'hidden'}" :thumb-style="{display:'none'}">
        <q-card dark bordered class="header-card">
      <q-card-section>
        <div class="text-h6 test-start">{{newsItem.title}}</div>
        <div class="text-subtitle2">{{newsItem.body}}</div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        {{ newsItem.body }}
      </q-card-section>
    </q-card>
    
        </q-scroll-area>
        
    </q-carousel-slide>
          </q-carousel>
        </q-expansion-item>
      </div>   
    
</template>
<script>
import { mapState } from "vuex";
export default {
    name:"header",
    data() {
        return {
             newsIndex:0,
             expanded:false,
             index:null,
             background:"../assets/loyalty1.jpg",
             newsSlide:null,
            search:null,
            news:[
              {
                title: "Станьте Партнером Программы лояльности!",
                body:"Хотите, чтобы о вашей компании, ее продуктах и услугах узнал 1 000 000 наших выпускников? Станьте Партнером Программы лояльности и развивайтесь вместе с нами!",
                backbround:"../assets/mentors.png"
              },
              {
                title: "Финуниверситет открывает двери!",
                body:"Все самые актуальные новости о Приемной кампании-2021!",
                backbround:"../assets/0302_oli.png"
              },
              {
                title: "Цикл встреч «Мастер своего дела». Третья встреча.",
                body:"23 марта в 17:20 состоится встреча с новым гостем цикла «Мастер своего дела».",
                backbround:"../assets/ugimz-banner.png"
              },
              {
                title: "Лицей Финансового университета ждет тебя!",
                body:"Регистрация на дни FINRISE",
                backbround:"../assets/loyalty1.jpg"
              }
            ],
            drawer:false,
            lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
    },
    watch:{
      newsIndex:function(val){
       // const img = require()
       this.background = this.news[val].backbround;
      }
    },
    computed: {
        ...mapState(["uni"]),
    },
    mounted() {
        console.log(this.uni);
    },
    methods:{
      logout:function(){
        this.$store.dispatch("uni/logout")
      },
      slide:function(e){
console.log(e);
      }
    }
}
</script>
<style lang="">
    
</style>