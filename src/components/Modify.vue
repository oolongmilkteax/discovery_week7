<template>
    <div>
        <p>
            <label for = "0">Cereal Prawn: {{datapacket.cerealPrawn}}</label><br>
            <input id = "0" value = 0 type = "number" min = 0><br>
            <label for = "1">Dry Beef Hor Fun: {{datapacket.dryBeefHorFun}}</label><br>
            <input id = "1" value = 0 type = "number" min = 0><br>
            <label for = "2">Mapo Tofu: {{datapacket.mapoTofu}}</label><br>
            <input id = "2" value = 0 type = "number" min = 0><br>
            <label for = "3">Pork Fried Rice: {{datapacket.porkFriedRice}}</label><br>
            <input id = "3" value= 0 type = "number" min = 0><br>
            <label for = "4">Prawn omelette: {{datapacket.prawnOmelette}}</label><br>
            <input id = "4" value= 0 type = "number" min = 0><br>
            <label for = "5">Sambal Kang Kung: {{datapacket.sambalKangKung}}</label><br>
            <input id = "5" value = 0 type = "number" min = 0><br>
        </p>
        <button type = "button" v-on:click = "updateOrder()">Update Order</button>
    </div>
</template>

<script>
import db from "../firebase.js"
export default {
    data() {
        return {
            docId: this.$route.params.docId,
            datapacket: {}
        }
    },
    methods: {
        fetchItems: function() {
            db.collection('orders').doc(this.docId).get().then((doc) => {
            this.datapacket = doc.data();
            })
        },
        updateOrder: function() {
            db.collection('orders').doc(this.docId).update({
            cerealPrawn: document.getElementById('0').value,
            dryBeefHorFun: document.getElementById('1').value,
            mapoTofu: document.getElementById('2').value,
            porkFriedRice: document.getElementById('3').value, 
            prawnOmelette: document.getElementById('4').value,
            sambalKangKung: document.getElementById('5').value,
            }).then(() => {this.$router.push( { path: '/orders' } )});
        }   
    },
    created() {
      this.fetchItems()    
    }
}
</script>

<style scoped>
p {
    line-height: 30px;
}
button {
  width: 140px;
  background-color: pink;
  border-radius: 7px;
  border-width: 1px;
  padding: 10px;
  font-size: 15px;
}
</style>