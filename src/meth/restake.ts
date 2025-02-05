import { Wallet } from "ethers";
import { MAX_UINT256, METH_ADDRESS, RESTAKING_BORING_VAULT_ADDRESS, RESTAKING_TELLER_ADDRESS } from "src/constants";
import { ERC20__factory, RestakingTeller__factory } from "src/contracts";

export namespace METHRestaking {
    export async function restakeMETH(
        wallet: Wallet,
        amount: bigint,
        minAmountOut: bigint
    ) {
        const sc = RestakingTeller__factory.connect(RESTAKING_TELLER_ADDRESS, wallet);
        const meth = ERC20__factory.connect(METH_ADDRESS, wallet);

        const allowance = await meth.allowance(wallet.address, RESTAKING_BORING_VAULT_ADDRESS);
        if(allowance < amount) {
            const approvalTx = await meth.approve(RESTAKING_BORING_VAULT_ADDRESS, BigInt(MAX_UINT256));
            await approvalTx.wait();
            console.log(approvalTx.hash);
        }
        const tx = await sc.deposit(
            METH_ADDRESS,
            amount,
            minAmountOut
        )
        await tx.wait();
        console.log(tx.hash)
        return tx.hash;
    }
}