<template>
  <div class="card" :class="colour" >
      <div class="country">
        <span class="flag-icon flag-icon-us"></span>
        <p>USA</p>
      </div>
      <p class="number">100.2k</p>
      <TrendChart
  :datasets="[
    {
      data: [10, 50, 20, 100, 40, 60, 80],
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
export default {
    name: "CountryCard",
    props: {
        colour: String,
    },
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
}


.fill {
    fill: url(#btcFill);
    fill-opacity: 0.5;
    
}

.stroke {
    stroke: white;
}



</style>