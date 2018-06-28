/**
* Sample transaction
* @param {blockland.LandTransfer} landTransfer
* @transaction
*/


function landTransfer(landTransfer) {
    // this function can be used to precondition land transfer
    // if (accountTransfer.from.balance < accountTransfer.to.balance) {
    // throw new Error ("Insufficient funds");
    // }

    // accountTransfer.from.balance -= accountTransfer.amount;
    // accountTransfer.to.balance += accountTransfer.amount;

    // return getAssetRegistry('blockland.Land')
    // .then (function (assetRegistry) {
    // return assetRegistry.update(accountTransfer.from);
    // })
    // .then (function () {
    // return getAssetRegistry('blockland.Land');
    // })
    // .then(function (assetRegistry) {
    // return assetRegistry.update(accountTransfer.to);
    // });

    // landTransfer.from.landId=0
    // landTransfer.to.landId=landTransfer.landId

    // return getAssetRegistry('blockland.Land')
    // .then(function(assetRegistry){
    //     return assetRegistry.update(landTransfer.from);
    // });

    // /lets update the land with the new owner
    landTransfer.land.ownerId=landTransfer.to.ownerId

    return getAssetRegistry('blockland.Land')
    .then(function(assetRegistry){
        return assetRegistry.update(landTransfer.land);
    });


}