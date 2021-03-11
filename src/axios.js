import { Line } from 'vue-chartjs'
import axios from 'axios'   

export default {
    extends: Line,
    data: function () {
      return {
          datacollection: {
              labels: [],
              datasets: [
                { 
                label: 'west',
                data: [],
                borderColor:"red",
                fill:false
                },
                { 
                  label: 'national',
                  data: [],
                  borderColor:'blue',
                  fill:false
                },
                { 
                  label: 'east',
                  data: [],
                  borderColor:'yellow',
                  fill:false
                },
                { 
                  label: 'central',
                  data: [],
                  borderColor:'green',
                  fill:false
                },
                { 
                  label: 'south',
                  data: [],
                  borderColor:'orange',
                  fill:false
                },
                { 
                  label: 'north',
                  data: [],
                  borderColor:'purple',
                  fill:false
                }
            ]
          },
          options: {
              legend: { 
                position:'top'
              },
              title: {
                display: true,
                text: 'PSI Twenty Four Hourly (By Region)'
              },
              responsive: true,
              maintainAspectRatio: false
          }
      }
    },
    methods: {
      fetchItems: function () {
          axios.get(`https://api.data.gov.sg/v1/environment/psi?date=2021-02-23`)
          .then(response => {
              this.results = response.data.items
              for(let key in this.results){
                this.datacollection.datasets[0].data.push(this.results[key]['readings']['psi_twenty_four_hourly']['west'])
                this.datacollection.datasets[1].data.push(this.results[key]['readings']['psi_twenty_four_hourly']['national'])
                this.datacollection.datasets[2].data.push(this.results[key]['readings']['psi_twenty_four_hourly']['east'])
                this.datacollection.datasets[3].data.push(this.results[key]['readings']['psi_twenty_four_hourly']['central'])
                this.datacollection.datasets[4].data.push(this.results[key]['readings']['psi_twenty_four_hourly']['south'])
                this.datacollection.datasets[5].data.push(this.results[key]['readings']['psi_twenty_four_hourly']['north'])
                this.datacollection.labels.push(this.results[key]['timestamp']+'')
              }
              this.renderChart(this.datacollection, this.options)
              })
      }
    },
    created () {
      this.fetchItems()
    }
  }