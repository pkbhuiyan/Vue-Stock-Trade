const state = {
    funds: 10000,
    stocks:[]
}

const mutations = {
    'BUY_STOCKS'(state, { stockId, stockPrice, quantity }){
        // check if the item is already in our local stocks if it's already there
        // then just add the quantity or just create new item object
        const record = state.stocks.find(element => element.id == stockId)
        if (record) {
            record.quantity += quantity
        }else{
            state.stocks.push({
                id:stockId,
                quantity:quantity
            })
        }
        state.funds -= stockPrice * quantity
    },
    'SELL_STOCKS'(state,{stockId,quantity,stockPrice}){
        const record = state.stocks.find(element => element.id == stockId)
        if (record.quantity > quantity) {
            record.quantity -= quantity
        }else{
            state.stocks.splice(state.stocks.indexOf(record),1)
        }
        state.funds += stockPrice * quantity 
    },
    'SET_PORTFOLIO'(state,portfolio){
        state.funds = portfolio.funds
        state.stockPortfolio = portfolio.stockPortfolio ? portfolio.stockPortfolio : []
    }
}

const actions = {
    sellStock({commit},order){
        commit('SELL_STOCKS',order)
    }
}

//  ????? 
const getters = {
    stockPortfolio(state,getters){  // inject getters from other modules
        return state.stocks.map(stock => { 
            //map() allows to transform all elment of the array
            // checks item in stocks module and local stocks[] array if exists
            // then return item object 
            const record = getters.stocks.find(element => element.id == stock.id)
            // getter stocks injects stocks.js module
            return{
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        })
    },
    funds(state){
        return state.funds
    }
}

export default{
    state,
    mutations,
    actions,
    getters
}