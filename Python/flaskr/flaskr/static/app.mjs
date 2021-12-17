async function login() {
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");
    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const address = await signer.getAddress();

    //let date = new Date();
    let message = "I'm signing this message!";
    const signature = await signer.signMessage(message);

    $.ajax({
      url: "/auth/login",
      type: "POST",
      data: {
        signature: signature,
        address: address,
      },
      success: function (response) {
        window.location = response;
      },
      error: function (response) {
        window.location = response;
      },
    });
  } catch (err) {
    throw err;
  }
}
document.querySelector("#login").addEventListener("click", login);
