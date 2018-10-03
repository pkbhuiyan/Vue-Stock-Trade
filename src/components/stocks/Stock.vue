<template>
    <div class="col-sm-6 col-md-4">
        <div class="card">
            <h5 class="card-header">
                {{stock.name}} 
                <small> 
                    (Price:{{stock.price}})
                </small>
            </h5>
            <div class="card-body">
                <input class="form-control col-md-5" type="number" name="number" id="number" placeholder="quantity" v-model="quantity">
                <button type="submit" class="btn btn-primary" @click="buyStock" 
                :disabled="quantity <= 0 || insufficientFunds ">
                {{insufficientFunds ? 'Insufficient Funds' : 'Buy'}}
                </button>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            quantity: 0
        }
    },
    props:['stock'],
    computed:{
        funds(){
            return this.$store.getters.funds
        },
        insufficientFunds(){
            return  this.quantity * this.stock.price > this.funds
        }
    },
    methods:{
        buyStock(){
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: parseInt(this.quantity)
            }
            console.log(order)
            // to call a action we need to use dispatch('name_of_the_action',N) function
            this.$store.dispatch('buyStock',order)
            this.quantity = 0
            
        }
    }
}
</script>


<style>
.card{
    margin-top: 10px;
}
.form-control{
    display: unset!important;
}
</style>

