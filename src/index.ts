import { parseEther, Wallet } from "ethers";
import { AgniSwap } from "./agni/swap";
import { env } from "./configs";
import { L2_PROVIDER, WRAPPED_NATIVE } from "./constants";

async function swapBaseIn() {

    const pk = env.keys.pk;
    const wallet = new Wallet(pk, L2_PROVIDER);

    await AgniSwap.swapExactIn(
        wallet,
        WRAPPED_NATIVE,
        '0xf6762afb45ac0af7ddc5aa92b885c6ece57874dc',
        10000,
        parseEther('0.001')
    );
}

async function swapBaseOut() {
    const pk = env.keys.pk;
    const wallet = new Wallet(pk, L2_PROVIDER);

    const token = '0xf6762afb45ac0af7ddc5aa92b885c6ece57874dc';
    const amountIn = parseEther('0.001');

    await AgniSwap.swapExactIn(
        wallet,
        token,
        WRAPPED_NATIVE,
        10000,
        amountIn
    );
}

swapBaseOut();