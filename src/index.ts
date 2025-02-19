import { formatEther, parseEther, Wallet } from "ethers";
import { AgniSwap } from "./agni/swap";
import { env } from "./configs";
import { CMETH_ADDRESS, L2_CMETH_ADDRESS, L2_PROVIDER, METH_ADDRESS, PROVIDER, WRAPPED_NATIVE } from "./constants";
import { METHStaking } from "./meth/stake";
import { ERC20__factory } from "./contracts";
import { METHRestaking } from "./meth/restake";
import { CMETHBridge } from "./meth/bridge";

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

async function restake() {
    const pk = env.keys.pk;
    const wallet = new Wallet(pk, PROVIDER);
    
    await METHRestaking.restakeMETH(wallet, parseEther('0.1'), 0n);
}

async function bridgeL1ToL2() {
    const pk = env.keys.pk;
    const wallet = new Wallet(pk, PROVIDER);

    await CMETHBridge.bridgeCMETHL1toL2(
        wallet,
        parseEther('0.1'),
        parseEther('0.02')
    )
}

async function main() {
    const pk = env.keys.pk;
    const wallet = new Wallet(pk, PROVIDER);
    const meth = ERC20__factory.connect(METH_ADDRESS, PROVIDER);
    const cmeth = ERC20__factory.connect(CMETH_ADDRESS, PROVIDER);
    const mBal = await meth.balanceOf(wallet.address);
    console.log('METH bal: ', formatEther(mBal));
    const cmBal = await cmeth.balanceOf(wallet.address);
    console.log('CMETH bal: ', formatEther(cmBal));

    const l2Wallet = new Wallet(pk, L2_PROVIDER);
    const l2cmETH = ERC20__factory.connect(L2_CMETH_ADDRESS, L2_PROVIDER);
    const l2cmBal = await l2cmETH.balanceOf(l2Wallet.address);
    console.log('L2CMETH bal: ', formatEther(l2cmBal));
}

main();