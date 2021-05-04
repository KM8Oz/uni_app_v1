<template >
    <div class="carousel_section">
        <q-carousel
      arrows
      animated
      v-model="slide"
      height="400px"
      thumbnails
        infinite
      :autoplay="true"
    > 
     <q-carousel-slide class="slider" :name="0" img-src="../../assets/loyalty1.jpg">
         <div class="slider_content">
          <div class="title">Станьте Партнером Программы лояльности!</div>
          <div class="body">Хотите, чтобы о вашей компании, ее продуктах и услугах узнал 1 000 000 наших выпускников? Станьте Партнером Программы лояльности и развивайтесь вместе с нами!</div>
          <q-btn class="go_slide_btn" flat square label="Подробнее"></q-btn>
        </div>
      </q-carousel-slide>
        <q-carousel-slide class="slider" :name="1" img-src="../../assets/ugimz-banner.png">
          <div class="slider_content">
          <div class="title">Финуниверситет открывает двери!</div>
          <div class="body">Все самые актуальные новости о Приемной кампании-2021!</div>
          <q-btn class="go_slide_btn" flat square label="Подробнее"></q-btn>
        </div>
      </q-carousel-slide>
       <q-carousel-slide class="slider" :name="2" img-src="../../assets/0302_oli.png">
           <div class="slider_content">
          <div class="title">Цикл встреч «Мастер своего дела». Третья встреча.</div>
          <div class="body">23 марта в 17:20 состоится встреча с новым гостем цикла «Мастер своего дела».</div>
          <q-btn class="go_slide_btn" flat square label="Подробнее"></q-btn>
        </div>
      </q-carousel-slide>
      <q-carousel-slide class="slider" :name="3" img-src="../../assets/mentors.png">
        <div class="slider_content">
          <div class="title">Лицей Финансового университета ждет тебя!</div>
          <div class="body">Регистрация на дни FINRISE</div>
          <q-btn class="go_slide_btn" flat square label="Подробнее"></q-btn>
        </div>
      </q-carousel-slide>
    </q-carousel>
    </div>
</template>
<script>
export default {
    data:()=>({
        slide:0
    })
}
</script>
<style >
    .carousel_section{
    max-width: 1200px;
    margin:0px 0px;
    padding: .5px 0px;
    width: 100%;
    }
    .carousel_section .q-carousel__thumbnail{
        width: 70px;
    height: 31px !important;
    }
    .slider{
    display: flex;
    flex-direction: row;
    position: absolute;
    align-items: center;
    }
    .slider .slider_content{
     max-width:450px;
     width:100%;
     height:100%;
     max-height: 250px;
     margin-left: 5%;
     background-color:#ffffffe5;
     display: flex;
     flex-direction: column;
     justify-content: space-around;
     background-image:url("../../assets/layered-waves-haikei (1).svg");
     background-size:cover;
     background-position: center;
     padding:15px;
     border-radius:25px;
    }
     .slider .slider_content .title{
     font-size:1.6em;
     font-weight: bold;
     text-justify: center;
     text-align: start;
    }
    .slider .slider_content .body{
   font-size:1em;
     font-weight: secondary;
     text-justify: center;
     text-align: justify;
    }
    .slider .slider_content .go_slide_btn{
      align-self: flex-end;
    justify-self:flex-end;
    padding:10px 10px;
    background-color:#ffffffe5;
    border-radius:10px;
    }
    .slider .slider_content .go_slide_btn:hover{
    background-color:#ffffffbe;
    }
</style>