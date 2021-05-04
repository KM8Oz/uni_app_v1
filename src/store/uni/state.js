export default function () {
  return {
    user:{
      tk:null,
      id:null,
      auth:false,
      un:null,
      avatar:"https://cdn.quasar.dev/img/boy-avatar.png",
      nm:null,
      is_student:true
    },
    menudefault:[
      {link:'#',name:'расписание', icon:"departure_board", color:"#333"}, 
      {link:'#',name:'предметы', icon:"emoji_objects", color:"#333"}, 
      {link:'#',name:'скидки и кредиты', icon:"point_of_sale", color:"#333"}, 
      {link:'#',name:'стажировки', icon:"work_outline", color:"#333"}, 
      {link:'#',name:'новости', icon:"feed", color:"#333"}
     ],
    menus:{
      "student":[
       {link:'#',name:'расписание', icon:"departure_board", color:"#333"}, 
       {link:'#',name:'предметы', icon:"emoji_objects", color:"#333"}, 
       {link:'#',name:'скидки и кредиты', icon:"point_of_sale", color:"#333"}, 
       {link:'#',name:'стажировки', icon:"work_outline", color:"#333"}, 
       {link:'#',name:'новости', icon:"feed", color:"#333"}
      ],
      "schoolboys":[
      {link:'#',name:'программы обучения', icon:"airplane_ticket", color:"#333"}, 
      {link:'#',name:'олимпиады', icon:"quiz", color:"#333"}, 
      {link:'#',name:'подготовка к егэ', icon:"img:../../assets/phone_120693.svg", color:"#333"}, 
      {link:'#',name:'баллы для поступления', icon:"15mp", color:"#333"}
      ]
    }
  }
}
