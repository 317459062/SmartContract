var AliCoinToken = artifacts.require("AliCoinToken");

module.exports = function(deployer) {
    deployer.deploy(AliCoinToken);
}