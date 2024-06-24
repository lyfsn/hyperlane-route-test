import { ChainMap, ChainMetadata } from '@hyperlane-xyz/sdk';
import { ProtocolType } from '@hyperlane-xyz/utils';

// A map of chain names to ChainMetadata
// Chains can be defined here, in chains.json, or in chains.yaml
// Chains already in the SDK need not be included here unless you want to override some fields
// Schema here: https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/main/typescript/sdk/src/metadata/chainMetadataTypes.ts
export const chains: ChainMap<ChainMetadata & { mailbox?: Address }> = {
  // mycustomchain: {
  //   protocol: ProtocolType.Ethereum,
  //   chainId: 123123,
  //   domainId: 123123,
  //   name: 'mycustomchain',
  //   displayName: 'My Chain',
  //   nativeToken: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  //   rpcUrls: [{ http: 'https://mycustomchain-rpc.com' }],
  //   blockExplorers: [
  //     {
  //       name: 'MyCustomScan',
  //       url: 'https://mycustomchain-scan.com',
  //       apiUrl: 'https://api.mycustomchain-scan.com/api',
  //       family: ExplorerFamily.Etherscan,
  //     },
  //   ],
  //   blocks: {
  //     confirmations: 1,
  //     reorgPeriod: 1,
  //     estimateBlockTime: 10,
  //   },
  //   logoURI: '/logo.svg',
  // },
  devneta: {
    protocol: ProtocolType.Ethereum,
    chainId: 64646464,
    domainId: 64646464,
    name: 'devneta',
    displayName: 'devneta',
    nativeToken: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: [{ http: 'https://rpc-devnet-a.archivenode.club' }],
    blockExplorers: [
      {
        name: 'MyCustomScan',
        url: 'https://mycustomchain-scan.com',
        apiUrl: 'https://api.mycustomchain-scan.com/api',
        family: "etherscan",
      },
    ],
    blocks: {
      confirmations: 1,
      reorgPeriod: 1,
      estimateBlockTime: 10,
    },
    logoURI: '/logo.svg',
  },
  devnetb: {
    protocol: ProtocolType.Ethereum,
    chainId: 74747474,
    domainId: 74747474,
    name: 'devnetb',
    displayName: 'devnetb',
    nativeToken: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: [{ http: 'https://rpc-devnet-b.archivenode.club' }],
    blockExplorers: [
      {
        name: 'MyCustomScan',
        url: 'https://mycustomchain-scan.com',
        apiUrl: 'https://api.mycustomchain-scan.com/api',
        family: "etherscan",
      },
    ],
    blocks: {
      confirmations: 1,
      reorgPeriod: 1,
      estimateBlockTime: 10,
    },
    logoURI: '/logo.svg',
  },
};
