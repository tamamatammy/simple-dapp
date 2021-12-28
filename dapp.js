console.log("hello dapp developers!")
// 1. Detect wallet is / is not installed

// when the page load we want you to execute something
window.addEventListener('load', function() {
    if (typeof window.ethereum !== 'undefined'){
        console.log('Wallet detected')
        let  walletDetected = document.getElementById('wallet-detected')
        // piped in html from javascripts 
        walletDetected.innerHTML += "Wallet has been detected"
    }

    else {
        console.log('Wallet Not Available!')
        alert("You need to install wallet!")        
    }
}
)

// 2. Allow user to access wallet
const walletEnable = document.getElementById('wallet-connect');

walletEnable.onclick = async () => {
    await ethereum.request({method: 'eth_requestAccounts'})
const walletCurrentAccount = document.getElementById('wallet-current-account');
walletCurrentAccount.innerHTML = "Here is your current account" + ethereum.selectedAddress
}