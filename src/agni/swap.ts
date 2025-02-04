import { Wallet } from "ethers";
import { AGNI_ROUTER_ADDRESS, MAX_UINT256, WRAPPED_NATIVE } from "src/constants";
import { ERC20__factory, SwapRouter__factory } from "src/contracts";
import { ISwapRouter } from "src/contracts/SwapRouter";

export namespace AgniSwap {
  export async function swapExactIn(
    wallet: Wallet,
    tokenIn: string,
    tokenOut: string,
    fee: number,
    amountIn: bigint
  ) {
    const routerSc = SwapRouter__factory.connect(AGNI_ROUTER_ADDRESS, wallet);

    if (tokenIn !== WRAPPED_NATIVE) {
      const tokenSc = ERC20__factory.connect(tokenIn, wallet);
      const allowance = await tokenSc.allowance(wallet.address, AGNI_ROUTER_ADDRESS);
      if (allowance < amountIn) {
        const approvalTx = await tokenSc.approve(AGNI_ROUTER_ADDRESS, BigInt(MAX_UINT256));
        await approvalTx.wait();
        console.log(approvalTx.hash);
      }
    }
    const params: ISwapRouter.ExactInputSingleParamsStruct = {
      tokenIn,
      tokenOut,
      fee,
      recipient: wallet.address,
      deadline: Date.now() + 6000000,
      amountIn,
      amountOutMinimum: 0n,
      sqrtPriceLimitX96: 0n
    }

    const tx = await routerSc.exactInputSingle(params, { value: tokenIn === WRAPPED_NATIVE ? amountIn : 0n });
    await tx.wait();

    console.log(tx.hash);

    return tx.hash;
  }
}