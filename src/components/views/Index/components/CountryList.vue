<template>
    <div class="country-list">
        <h3>Top Countries</h3>
        <div class="list">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.country-list {
    width: 85vw;
}

.list {
    display: flex;
    flex-direction: row;
    flex-shrink: unset;
    width: 92vw;
    overflow: auto;
}

.list * {
    flex-shrink: 0;
}


h3 {
    font-size: 15px;
    font-weight: 500;
    color: #1F6357;
    margin-top: 30px;
    margin-bottom: 20px;
}

</style>