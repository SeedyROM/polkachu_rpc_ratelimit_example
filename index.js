const axios = require("axios");

const getBlock = async () => {
    try {
        const result = await axios.get("https://juno-testnet-rpc.polkachu.com/block");

        if (result.data) {
            console.log(result.data.body);
        } else {
            console.log("No result.data");
        }
    } catch (error) {
        console.log("Error: ", error.response);
    }
}

const testRpc = async () => {
    for (let i = 0; i < 50; i++) {
        await getBlock();
    }
};

testRpc();