//GOAL: ricreare lo slider visto in jquery, con tecnologia Vue
//BONUS: aggiungere un timer che permetta di ciclare le immagini in automatico (cambio ogni 3sec)

// funzione cambio immagini con Vue:
var divFoto = new Vue({
  el:'#app',
  data: {
    imgs: [
      'img/cabin.png',
      'img/cake.png',
      'img/cabin.png',
      'img/game.png'
    ],
    'activeImg': 0;
  },
  methods:{
    clickImg(){
      leftArrow: function(){
        this.activeImg--;
        if(this.activeImg < 0){
          this.activeImg = this.img.length - 1;
        }
      },
      rightArrow: function(){
        this.activeImg++;
        if((this.activeImg >= this.img.length){
          this.activeImg = 0;
        }
      }
    }
  }
})
