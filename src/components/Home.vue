<template>
    <div class="content">
        <h2>Stock But & Sell</h2>
        <p>You may save or Load your data</p>
        <p>Click on End day to begin New Day !</p>
        <hr>
        <b>   Your Funds: ${{ funds }} </b>
    </div>
</template>

<script>

export default {
    computed:{
        funds(){
            return this.$store.getters.funds
        }
    }
}
</script>

