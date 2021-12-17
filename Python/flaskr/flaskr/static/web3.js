"use strict";

const Web3Modal = window.Web3Modal.default;
const evmChains = window.evmChains;
let web3Modal;
let provider;
let selectedAccount;

function init() {
  console.log("Initializing example");
  console.log(
    "window.web3 is",
    window.web3,
    "window.ethereum is",
    window.ethereum
  );
  //   if(location.protocol !== 'https:') {
  //     // https://ethereum.stackexchange.com/a/62217/620
  //     const alert = document.querySelector("#alert-error-https");
  //     alert.style.display = "block";
  //     document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
  //     return;
  //   }
  const providerOptions = {};
  web3Modal = new Web3Modal({
    cacheProvider: false, // optional
    providerOptions, // required
    disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
  });
  console.log("Web3Modal instance is", web3Modal);
}

// send request to server to clear session
function logout() {
  $.ajax({
    url: "/auth/logout",
    type: "POST",
    success: function (response) {
      window.location = response;
    },
    error: function (response) {
      console.log(response);
    },
  });
}

//send request to server to update session and g
async function login() {
  try {
    provider = await web3Modal.connect();
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    selectedAccount = accounts[0];
    console.log("login", selectedAccount);
    $.ajax({
      url: "/auth/login",
      type: "POST",
      data: {
        address: selectedAccount,
      },
      success: function (response) {
        window.location = response;
      },
      error: function (response) {
        console.log(response);
      },
    });
  } catch (e) {
    console.log(e);
    return;
  }
}

async function onConnect() {
  console.log("Opening a dialog", web3Modal);
  await login();
  subscribe();
}

//close provider and then logout
async function onDisconnect() {
  console.log("Killing the wallet connection", provider);
  if (provider && provider.close) {
    await provider.close();
    await web3Modal.clearCachedProvider();
    provider = null;
  }
  selectedAccount = null;
  logout();
}

//I expect when metamask is manually disconnected, the app automatically logout but it does'nt work that way.
//Even https://metafora.app/ has the same problem.
function subscribe() {
  // Subscribe to accounts change
  provider.on("accountsChanged", (accounts) => {
    console.log("accountsChanged", accounts);
    logout();
  });

  // Subscribe to chainId change
  provider.on("chainChanged", (chainId) => {
    console.log("accountsChanged", chainId);
    logout();
  });

  // Subscribe to networkId change
  provider.on("networkChanged", (networkId) => {
    console.log("accountsChanged", networkId);
    logout();
  });
}

window.addEventListener("load", async () => {
  init();
  if (document.querySelector("#logout") !== null) {
    document.querySelector("#logout").addEventListener("click", onDisconnect);
  }
  if (document.querySelector("#login") !== null) {
    document.querySelector("#login").addEventListener("click", onConnect);
  }
});
