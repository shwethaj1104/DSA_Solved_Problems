
let dates=[7,1,5,3,6,4]

//first you need to buy the stock to sell it later for max profit
//let's think we are selling the stock when stock_price=6, then we would have bought the stock before that, that is either at stock_price=7,1,5,3
//we must see which gives us max profit and decide

//TC=0(N)
//SC=O(1)
const bestTime=(dates,n)=>{
    let profit=0;
    let min=dates[0]
    for(let i=1;i<=n-1;i++){
        let cost=dates[i]-min
        profit=Math.max(profit,cost)
        min=Math.min(min,dates[i])
    }
    return [profit,min]
}

console.log("best time to buy stock with profit is",bestTime(dates,dates.length))