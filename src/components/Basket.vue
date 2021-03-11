<template>
    <div>
        <order>
            <span>Menu:</span>
            <ul>
                <li v-for="selection in itemsSelected" v-bind:key="selection">
                <p>{{selection[0]}} x {{selection[1]}}</p>  
                </li>
            </ul>
            <button v-on:click = "findTotal(); sendOrder()">Add Order</button>
        </order>
    </div>
</template>

<script>
import db from "../firebase.js"
export default {
    data() {
        return {
            subtotal: 0
        }
    },
    props: {
        itemsSelected: {
            type:Array
        }
    },
    methods: {
        findTotal: function() {
            this.subtotal = 0;
            for (let i = 0; i < this.itemsSelected.length; i++) {
                this.subtotal += (this.itemsSelected[i][1] * this.itemsSelected[i][2])
            }
            return this.subtotal
        },
        sendOrder: function() {
            var prawnOmelette = 0;
            var dryBeefHorFun = 0;
            var mapoTofu = 0;
            var porkFriedRice = 0;
            var cerealPrawn = 0;
            var sambalKangKung = 0;
            for (let i = 0; i < this.itemsSelected.length; i++) {
                if (this.itemsSelected[i][0] === "Prawn omelette") {
                    prawnOmelette = this.itemsSelected[i][1]
                } else if (this.itemsSelected[i][0] === "Dry Beef Hor Fun") {
                    dryBeefHorFun = this.itemsSelected[i][1]
                } else if (this.itemsSelected[i][0] === "Mapo Tofu") {
                    mapoTofu = this.itemsSelected[i][1]
                } else if (this.itemsSelected[i][0] === "Pork Fried Rice") {
                    porkFriedRice = this.itemsSelected[i][1]
                } else if (this.itemsSelected[i][0] === "Cereal Prawn") {
                    cerealPrawn = this.itemsSelected[i][1]
                } else {
                    sambalKangKung = this.itemsSelected[i][1]
                }
            }
            db.collection('orders').add({
                prawnOmelette: prawnOmelette,
                dryBeefHorFun: dryBeefHorFun,
                mapoTofu: mapoTofu,
                porkFriedRice: porkFriedRice,
                cerealPrawn: cerealPrawn,
                sambalKangKung: sambalKangKung
                }).then(() => {location.reload()});
        }
    },
    computed: {
        grandtotal: function() {
            return (this.subtotal * 1.07).toFixed(2);
        }
    }
}
</script>

<style>
order {
    float: right;
    padding-right: 90px;
    padding-top: 30px;
    font-size: 25px;
}
button {
    border-radius: 7px;
    background-color:pink;
    border: 1px solid black;
}
/*#total {
    line-height: 40px;
}*/
</style>