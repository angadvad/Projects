/*m x n integer grid accounts - accounts[i][j] is the amount of money the ith
customer has in the jth bank. Return the wealth that the richest customer has

A customer's wealth is the amount of money they have in all their banks. The
richest customer is the customer that has the max wealth.*/

let maxTotalWealth = (accounts) =>{
    let totalHigh = 0;
    for (let a=0; a<accounts.length; a++){
        let total = 0;
        for (let b=0; b<accounts[a].length; b++){
            total += accounts[a][b];
        }

        if(totalHigh>total){
            // do nothing (current total is higher)
        }else {
            totalHigh = total;
        }
    }
    return totalHigh;
}

console.log(maxTotalWealth([[2,8,7],[7,1,3],[1,9,5]]));

