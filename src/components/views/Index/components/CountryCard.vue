<template>
  <div class="card" :class="colour" >
      <div class="country">
        <span class="flag-icon" :class="`flag-icon-${country_code}`"></span>
        <p>{{ country.replace('-', ' ') }}</p>
      </div>
      <p class="number">100.2k</p>
      <TrendChart
  :datasets="[
    {
      data: graph_data,
      smooth: true,
      padding: 0,
      stroke:true,
      fill:true,
    }
  ]"
  :grid="{
     verticalLines: false,
     horizontalLines: false
  }"
  :min="0">
</TrendChart>
    <svg style="width:0; height:0; position:absolute;" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="btcFill" x1="1" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#ffffff"></stop>
          <stop offset="100%" stop-color="#ffffff00"></stop>
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<script>
import {getCountryData} from "../api";

export default {
    name: "CountryCard",
    props: {
        colour: String,
        country: String,
    },
    data() {
        return {
            graph_data: [10, 50, 20, 100, 40, 60, 80],
            country_code: "",
        };
    },
    created() {
        getCountryData(this.country).then(response => {
            this.graph_data = response.data.filter(obj => obj.Province == "").map(obj => obj.Cases)
            //this.graph_data = this.graph_data.slice(Math.max(this.graph_data.length - 200, 1));
            this.country_code = response.data[0].CountryCode.toLowerCase();
        }).catch(() => {
            console.error("Failed to get data for the country " + this.country);
        });
    }
}
</script>

<style>

.card {
    width: 35vw;
    height: 24vh;
    border-radius: 10px;
    margin-right: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.number{
    color: white;
    margin-top: 0px ;
    font-weight: 500;
}

.primary {
    background-color: #348A7B;
}

.secondary {
    background-color: #FF8367;
}

.tertiary {
    background-color: #FFD362;
}

.country {
    display: flex;
    width: 100%;
    justify-content: center;
}

.country p {
    margin-left: 5px;
    color: white;
    text-transform: capitalize;
    max-width: 60%;
    text-align: center;
}


.fill {
    fill: url(#btcFill);
    fill-opacity: 0.5;
    
}

.stroke {
    stroke: white;
}



</style>