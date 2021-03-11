<template>
  <div>
    <ul id = "items">
        <li v-for="i in items" v-bind:key="i">
            <h2>{{i.name}}</h2>
            <img v-bind:src="i.imageURL" alt = "Food image">
            <p>
              ${{i.price}}
            </p>
            <qty v-bind:item = "i" v-on:counter = "onCounter"></qty>
        </li>
    </ul>
    <basket v-bind:itemsSelected="itemsSelected"></basket>
  </div>
</template>

<script>
import db from "../firebase.js"
export default {
  data() {
      return {
        items : [],
        itemsSelected : []
      }
    },
  methods: {
    onCounter: function (item, count) {
        if (this.itemsSelected.length === 0 && count > 0) {
            this.itemsSelected.push([item.name, count, item.price]);
        } else {
            // Loop through everything to check what is not in the basket
            for (let i = 0; i < this.itemsSelected.length; i++) {
                const curr_item = this.itemsSelected[i];
                const item_name = curr_item[0];
                if (item_name === item.name && count > 0) {
                    this.itemsSelected.splice(i, 1, [item.name, count, item.price]);
                    break;
                }
                if (item_name === item.name && count == 0) {
                    this.itemsSelected.splice(i,1)
                    break;
                } 
                if (item_name != item.name && i == (this.itemsSelected.length - 1)) {
                    this.itemsSelected.push([item.name, count, item.price]);
                }
            }
        }
    },
    fetchItems: function () {
      db.collection('menu').get().then(snapshot => {
      snapshot.docs.forEach(doc => {
        this.items.push(doc.data()) 
      })
      })
    },
  },
  created() {
      this.fetchItems()    
  }
}
</script>

<style scoped>
h2{
  text-align: center;
}
#items{
    float: left;
    width: 71%;
    padding: 5px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    line-height: 5px;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 5px;
    border: 1px solid #222;
    margin: 10px;
}
img{
  width:100px;
  height: 100px;
}
p{
    font-size: 25px;
}
</style>