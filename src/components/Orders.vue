<template>
    <div>
        <ul id = "orders">
            <li v-for="order in orders" v-bind:key="order">
                <ul id = "order">
                    <p> 
                        Cereal Prawn: {{order[1].cerealPrawn}}<br>
                        Dry Beef Hor Fun: {{order[1].dryBeefHorFun}}<br>
                        Mapo Tofu: {{order[1].mapoTofu}}<br>
                        Pork Fried Rice: {{order[1].porkFriedRice}}<br>
                        Prawn omelette: {{order[1].prawnOmelette}}<br>
                        Sambal Kang Kung: {{order[1].sambalKangKung}}
                    </p>
                    <buttons>
                        <button v-bind:id="order[0]" v-on:click="deleteItem($event)">Delete</button>
                        <button v-bind:id="order[0]" v-on:click="route($event)">Modify</button>
                    </buttons>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import db from "../firebase.js"
export default {
    data() {
        return {
            orders: []
        }
    },
    methods: {
        fetchItems: function() {
            db.collection('orders').get().then(snapshot => {
            snapshot.docs.forEach(doc => {
            this.orders.push([doc.id, doc.data()]) 
            })
            })
        },
        deleteItem: function(event) {
            let doc_id = event.target.getAttribute("id");
            for (let i = 0; i < this.orders.length; i++) {
                if (this.orders[i][0] === doc_id) {
                    db.collection('orders').doc(this.orders[i][0]).delete().then(() => {location.reload()});
                }
            }
        },
        route: function(event) {
            let doc_id = event.target.getAttribute("id");
            this.$router.push({ name: 'Modify', params: { docId: doc_id } })
        }
    },
    created() {
        this.fetchItems()
    }
}
</script>

<style scoped>  
#orders {
    flex-wrap: wrap;
}

ul {
  display: flex;
  list-style-type: none;
  padding: 0;
  float: left;
}
li {
  list-style-type: none;
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
  padding-left: 100px;
}
button {
  width: 65px;
  height: 30px;
  background-color: pink;
  border-radius: 7px;
  border-width: 1px;
}
buttons {
    margin-left: 130px;
    padding: 15px;
}
</style>