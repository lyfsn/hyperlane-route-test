import { ChainMap, ChainMetadata, ExplorerFamily } from '@hyperlane-xyz/sdk';
import { ProtocolType } from '@hyperlane-xyz/utils';

// A map of chain names to ChainMetadata
// Chains can be defined here, in chains.json, or in chains.yaml
// Chains already in the SDK need not be included here unless you want to override some fields
// Schema here: https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/main/typescript/sdk/src/metadata/chainMetadataTypes.ts
export const chains: ChainMap<ChainMetadata & { mailbox?: Address }> = {
  endurance: {
    protocol: ProtocolType.Ethereum,
    chainId: 648,
    domainId: 648,
    name: 'endurance',
    displayName: 'Endurance',
    nativeToken: { name: 'ACE', symbol: 'ACE', decimals: 18 },
    rpcUrls: [{ http: 'https://rpc-endurance.fusionist.io/' }],
    blockExplorers: [
      {
        name: 'Endurance Explorer',
        url: 'https://explorer-endurance.fusionist.io/',
        apiUrl: 'https://explorer-endurance.fusionist.io/api',
        family: ExplorerFamily.Blockscout,
      },
    ],
    blocks: {
      confirmations: 1,
      reorgPeriod: 1,
      estimateBlockTime: 12,
    },
    logoURI: '/Endurance_svg.svg',
  },
};
