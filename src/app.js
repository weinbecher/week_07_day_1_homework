import Vue from 'vue';
document.addEventListener('DOMContentLoaded', ()=> {
  new Vue({


    el: '#app',
    data:{
      things:[
        {title:'Sell all the HP sauce in the world to an alien',
        isDone:true},
        {title:`Use the money to buy a parrot and teach him to say "I think I've turn into a human"`,
        isDone:false},
        {title:'Visit a witch and beg her to turn the parrot into a human',
        isDone:false},
        {title:`Teach the parrot human to say "I'm a parrot" and lock him in a mental insititution`,
        isDone:false}
      ],
      newThing:"" //why is it not {}

    },
    methods: {

      saveNewThing : function(){ this.things.push({
        title: this.newThing,
        isDone:false
      });
      this.thing = "";
    },

      doneThing : function(index){
        this.things[index].isDone = true;
      }
    }

  });

});
