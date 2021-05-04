<template >
    <div class="index_container">
              <q-carousel
      v-model="newsIndex"
      swipeable
      animated
      padding
      ref="slider"
      class="text-white sliderWrapper"
       transition-prev="slide-right"
      transition-next="slide-left"
    >
    <q-carousel-slide v-for="(newsItem, i) in news" :key="i" :name="i" class="text-center sliderWrapper-slider" :img-src="newsItem.backbround">
        <q-scroll-area class="fit" :bar-style="{display:'hidden'}" :thumb-style="{display:'none'}">
        <q-card dark bordered class="header-card">
      <q-card-section>
        <div class="text-h6 test-start">{{newsItem.title}}</div>
         <q-btn class="slider_btn" flat bordered label="Подробнее"></q-btn>
      </q-card-section>
    </q-card>
    
        </q-scroll-area>
        
    </q-carousel-slide>
          </q-carousel>
          <q-list bordered separator>
      <q-item class="item-index" clickable v-ripple v-for="(item, i) in uni.menudefault" :key="i" :to="item.link">
        <q-item-section avatar>
          <q-icon :name="item.icon" :color="item.color"/>
        </q-item-section>
        <q-item-section class="name_item">{{item.name}}</q-item-section>
        <q-item-section side><q-icon name="arrow_forward_ios"></q-icon></q-item-section>
      </q-item>
    </q-list>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    data() {
        return {
            newsIndex:0,
            is_student:true,
            menu:[
                {
                    name:"Наш университет",
                    link:"#",
                    icon:"book",
                     color:"#333",
                },
                   {
                    name:"Организационная структура",
                    link:"#",
                    icon:"book",
                     color:"#333",
                }
                ,   {
                    name:"Сведения об образовательной организации",
                    link:"#",
                    icon:"book",
                    color:"#444",
                },
                   {
                    name:"Ученый совет",
                    link:"#",
                    icon:"book",
                    color:"#333",
                },
                   {
                    name:"Наука и инновации",
                    link:"#",
                    icon:"book",
                    color:"#eee",
                },
                   {
                    name:"Международная деятельность",
                    link:"#",
                    icon:"book",
                    color:"#ccc",
                }
              ],
              news:[
              {
                title: "Станьте Партнером Программы лояльности!",
                body:"Хотите, чтобы о вашей компании, ее продуктах и услугах узнал 1 000 000 наших выпускников? Станьте Партнером Программы лояльности и развивайтесь вместе с нами!",
                backbround:"../assets/0302_oli.png"
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
    mounted() {
       // console.log(this.$store)
       // this.$store.dispatch("uni/sign_in", {ssun:"kimo",ssid:123,sstk:"sdasdasdasds",ssauth:true})
    },
}
</script>
<style >
    .index_container{
        width:100%;
    }
    .index_container .sliderWrapper{
       padding:15px !important;
        height:200px;
        width:100%;
        background-color:unset;
    }
    .sliderWrapper-slider{
        border-radius:30px;
        
    }
    .slider_btn{
        height: 50px;
        background:#fff;
        border-radius:15px;
        color:black
    }
    .item-index{
        background:#fff;
        border-radius:15px;
        height:60px;
        padding: px 0px;
        width: 90%;
        margin:5px auto;
    }
    .item-index .name_item{        
        color:rgb(0, 0, 0);
    }
</style>