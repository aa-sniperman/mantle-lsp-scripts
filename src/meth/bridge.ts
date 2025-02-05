import { ethers, Wallet } from "ethers";
import { CMETH_ADDRESS, L1_CMETH_ADAPTER_ADDRESS, L2_OTF_EID, MAX_UINT256 } from "src/constants";
import { ERC20__factory, L1cmETHAdapter__factory } from "src/contracts";
import { MessagingFeeStruct, SendParamStruct } from "src/contracts/bridge/L1cmETHAdapter";

export namespace CMETHBridge {
    export async function bridgeCMETHL1toL2(
        wallet: Wallet,
        amount: bigint,
        nativeFee: bigint
    ) {
        const sc = L1cmETHAdapter__factory.connect(L1_CMETH_ADAPTER_ADDRESS, wallet);
        const cmeth = ERC20__factory.connect(CMETH_ADDRESS, wallet);

        const allowance = await cmeth.allowance(wallet.address, L1_CMETH_ADAPTER_ADDRESS);

        if (allowance < amount) {
            const approvalTx = await cmeth.approve(L1_CMETH_ADAPTER_ADDRESS, BigInt(MAX_UINT256));
            await approvalTx.wait();
            console.log(approvalTx.hash);
        }

        const sendParams: SendParamStruct = {
            dstEid: L2_OTF_EID,
            to: ethers.zeroPadValue(wallet.address, 32),
            amountLD: amount,
            minAmountLD: 0n,
            extraOptions: "0x",
            composeMsg: "0x",
            oftCmd: "0x"
        }

        const feeParams: MessagingFeeStruct = {
            nativeFee,
            lzTokenFee: 0n
        }
        const tx = await sc.send(sendParams, feeParams, wallet.address, { value: nativeFee });
        console.log(tx.data)
        await tx.wait();
        return tx.hash;
    }
}