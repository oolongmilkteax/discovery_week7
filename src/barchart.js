import {Bar} from 'vue-chartjs'
import db from './firebase.js'

export default {
    extends: Bar,
    data() {
      return {
          datacollection: {
              labels: [],
              datasets: [{
                  backgroundColor: [],
                  data: [0,0,0,0,0,0]
                }]
          },
          options: {
              legend: { display: false },
              title: {
                display: true,
                text: 'Total Number of each dish'
              },
              responsive: true,
              maintainAspectRatio: false,
              scales:{
                yAxes:[{
                    ticks:{
                        min:0
                    }
                 }],
                 
            }
          }
    }
  },
    methods: {
      fetchItems: function () {
        db.collection('orders').get().then(querySnapShot => {
          querySnapShot.forEach(doc => { 
              this.datacollection.datasets[0].data[0]+=parseInt(doc.data().prawnOmelette),
              this.datacollection.datasets[0].data[1]+=parseInt(doc.data().dryBeefHorFun),
              this.datacollection.datasets[0].data[2]+=parseInt(doc.data().sambalKangKung),
              this.datacollection.datasets[0].data[3]+=parseInt(doc.data().porkFriedRice),
              this.datacollection.datasets[0].data[4]+=parseInt(doc.data().mapoTofu),
              this.datacollection.datasets[0].data[5]+=parseInt(doc.data().cerealPrawn)
          })
        })
        db.collection('menu').get().then(snapshot => {
          snapshot.forEach(doc => {
            this.datacollection.labels.push(doc.data().name)
            this.datacollection.datasets[0].backgroundColor.push(doc.data().color)
          })
          this.renderChart(this.datacollection, this.options)
        })
        
      }
    },
    created () {
      this.fetchItems()
    },
    /*mounted(){
      this.renderChart(this.datacollection, this.options)
    }*/
  }