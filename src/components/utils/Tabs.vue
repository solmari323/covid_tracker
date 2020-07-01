<template>
  <div class="tabs">
      <h3 :class="{active: active === 'confirmed'}" @click="changeActive('confirmed')">Active</h3>
      <h3 :class="{active: active === 'deaths'}" @click="changeActive('deaths')">Dead</h3>
      <h3 :class="{active: active === 'recovered'}" @click="changeActive('recovered')">Recovered</h3>
  </div>
</template>

<script>
export default {
    data() {
        return {
            active: 'confirmed',
        };
    },
    methods: {
        changeActive(value) {
            if (this.active !== value) {
                this.active = value;
                this.$emit('change', value);
            }
        },
    },
}
</script>

<style>
    .tabs {
        display: flex;
        width: fit-content;
        margin-top: 20px;
    }

    .tabs h3 {
        width: 20vw;
        text-align: center;
        padding: 8px 5px;
        
        border-radius: 5px;
        margin: 10px 10px;

        font-size: 15px;
        font-weight: 500;
        color: #6CA197;
    }

    .active {
        background-color: #ECF4F3;
        color: #1A6457 !important;
    }
</style>