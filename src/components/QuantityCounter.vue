<template>
    <div class="counter">
        <button v-on:click = "decrease" v-bind:style = "buttonStyle">-</button><span> {{counter}} </span><button v-on:click = "increase" v-bind:style = "buttonStyle">+</button>
    </div>
</template>

<script>
export default {
  props:{ 
      item:{
          type: Object
      }
  },
  data(){
    return{
        counter: 0,
        buttonStyle: {
            'background-color': 'pink',
            'font-size': '30px',
            'border-radius': '7px',
            border: '1px solid black',
            height: '45px',
            width: '45px'
        }
    }
  },
  methods: {
    decrease: function() {
        if (this.counter > 0) {
            this.counter = this.counter - 1
        }
        this.$emit('counter', this.item, this.counter)
    },
    increase: function() {
        if (this.counter <= 9) {
            this.counter = this.counter + 1
        } else {
            alert("You cannot buy more than 10 items.")
        }
        this.$emit('counter', this.item, this.counter)
    }
  }
}
</script>

<style>
    span{
        font-size: 30px;
    }
</style>