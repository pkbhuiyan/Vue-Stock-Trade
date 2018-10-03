<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/">Stock Trade</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
                <router-link class="nav-item" tag="li"  to="/portfolio">
                    <a class="nav-link">Portfolio</a>
                </router-link>
                <router-link class="nav-item" tag="li" to="/stocks">
                    <a class="nav-link">Stocks</a>
                </router-link>
            </ul>
            
            <ul class="navbar-nav navbar-right mr-auto">
                <li>
                    <p class="nav-link btn btn-default" @click="saveData">Save Data</p>
                </li>
                <li>
                    <p class="nav-link btn btn-default" @click="loadData">Load Data</p>
                </li>

                    <li><p class="nav-link btn btn-success" style="color:#fff;" href="#" @click="endDay">End Day</p></li>
               
            </ul>
                <h4>Balance: $ {{ funds }}</h4>    
        </div>
    </nav>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    
    computed:{
        funds(){
            return this.$store.getters.funds
        }
        
    },
    methods:{
        // use 3rd bracket if you dont want to change the name or use 2nd bracket if you want to
        ...mapActions({
            randomizeStocks: 'randomizeStocks',
            fetchData: 'loadData'
        }),
        endDay(){
            return this.randomizeStocks()
        },
        saveData(){
            const data = {
                funds: this.$store.getters.funds,
                stockPortfolio: this.$store.getters.stockPortfolio,
                stocks: this.$store.getters.stocks
            };
            this.$http.put('data.json',data)
        },
        loadData(){
            return this.fetchData()
        }
    }
}
</script>

