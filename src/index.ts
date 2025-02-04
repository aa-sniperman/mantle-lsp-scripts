import { formatEther, parseEther, Wallet } from "ethers";
import { AgniSwap } from "./agni/swap";
import { env } from "./configs";
import { L2_PROVIDER, METH_ADDRESS, PROVIDER, WRAPPED_NATIVE } from "./constants";
import { METHStaking } from "./meth/stake";
import { ERC20__factory } from "./contracts";

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

async function stake() {
    const pk = env.keys.pk;
    const wallet = new Wallet(pk, PROVIDER);
    const amount = parseEther('0.101');
    await METHStaking.stake(wallet, amount, 0n);
}

async function main() {
    const pk = env.keys.pk;
    const wallet = new Wallet(pk, PROVIDER);
    const meth = ERC20__factory.connect(METH_ADDRESS, PROVIDER);
    const balance = await meth.balanceOf(wallet.address);
    console.log(formatEther(balance));
}

main();