import { Wallet } from "ethers";
import { STAKING_ADDRESS } from "src/constants";
import { Staking__factory } from "src/contracts";

export namespace METHStaking {
    export async function stake(
        wallet: Wallet,
        amount: bigint,
        minAmountOut: bigint
    ) {
        const sc = Staking__factory.connect(STAKING_ADDRESS, wallet);
        const tx = await sc.stake(minAmountOut, {
            value: amount
        })
        await tx.wait();
        console.log(tx.hash)
        return tx.hash;
    }
}