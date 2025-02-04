import * as dotenv from 'dotenv';
import * as Joi from 'joi';
dotenv.config();

export const isLocal = process.env.NODE_ENV === 'local';

const envVarsSchema = Joi.object()
  .keys({
    PRIVATE_KEY: Joi.string().required(),
    NETWORK: Joi.string().valid('mainnet', 'testnet'),
    MAINNET_RPC: Joi.string().default('https://eth.llamarpc.com'),
    TESTNET_RPC: Joi.string().default('https://ethereum-sepolia-rpc.publicnode.com'),
    L2_MAINNET_RPC: Joi.string().default('https://rpc.mantle.xyz'),
    L2_TESTNET_RPC: Joi.string().default('https://rpc.sepolia.mantle.xyz')
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: 'key' } })
  .validate(process.env);

if (error != null) {
  throw new Error(`Config validation error: ${error.message}`);
}

export const env = {
  network: envVars.NETWORK,
  keys: {
    pk: envVars.PRIVATE_KEY,
  },
  eth: {
    mainnetRpc: envVars.MAINNET_RPC,
    testnetRpc: envVars.TESTNET_RPC
  },
  mantle: {
    mainnetRpc: envVars.L2_MAINNET_RPC,
    testnetRpc: envVars.L2_TESTNET_RPC
  }
};
