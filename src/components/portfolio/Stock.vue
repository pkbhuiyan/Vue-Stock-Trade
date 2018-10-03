<template>
    <div class="col-sm-6 col-md-4">
        <div class="card">
            <h5 class="card-header">
                {{stock.name}} 
                <small> 
                    (Price:{{stock.price}} | Quantity: {{ stock.quantity }})
                </small>
            </h5>
            <div class="card-body">
                <input class="form-control col-md-5" type="number" name="number" id="number" placeholder="quantity" v-model="quantity">
                <button type="submit" class="btn btn-primary" @click="sellStock" 
                :disabled="quantity <= 0 || stockQuantity">
                {{ stockQuantity ? 'Insufficient Stock':'Sell'}}
                </button>
            </div>
        </div>
    </div>
</template>


<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return{
            quantity: 0
        }
    },
    props:['stock'],
    computed:{
        stockQuantity(){
           return this.quantity > this.stock.quantity
       }
    },
    methods:{
        ...mapActions({
            placeSellOrder: 'sellStock'
        }),
       sellStock(){
           const order = {
               stockId: this.stock.id,
               stockPrice: this.stock.price,
               quantity: this.quantity  
           }
           this.placeSellOrder(order)
           this.quantity = 0
       },
       
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

