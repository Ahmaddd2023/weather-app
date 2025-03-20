import { Component } from '@angular/core';

@Component({
  selector: 'app-tokenless-prices',
  templateUrl: './tokenless-prices.component.html',
  styleUrls: ['./tokenless-prices.component.scss']
})
export class TokenlessPricesComponent {
  costs = [
    {'name': 'LayerZero_Labs', description: 'Open source web3 wallet, browser based and community owned.',
      img: '/assets/images/icons/labs.svg', cost: '$263.3M'},
    {'name': 'ourZORA', description: 'Infrastructure for creating NFT collections and allowing them to be traded.',
      img: '/assets/images/icons/zora.svg', cost: '$60M'},
    {'name': 'PolyhedraZK', description: 'Building the next generation of Web3 interoperability, scalability, and privacy infrastructure with\n' +
        'industry-leading Zero-knowledge proof (ZKP) technology.',
      img: '/assets/images/icons/polyhedra.svg', cost: '$25M'},
    {'name': 'soundxyz_', description: 'Next generation music platform that allows lesser-known artists to earn money with NFTs.',
      img: '/assets/images/icons/sounsxyz.svg', cost: '$25M'},
    {'name': 'base', description: 'Ethereum Layer 2 network that offers a secure, low-cost, and developer-friendly way to build decentralized applications.',
      img: '/assets/images/icons/base.svg', cost: ''},
    {'name': 'azuroprotocol', description: 'Decentralized protocol supporting on-chain channel \n' +
        'of sports betting markets and other gambling markets \n' +
        'with deep liquidity',
      img: '/assets/images/icons/azuroprotocol.svg', cost: '$7.5M'},
    {'name': 'SocketDotTech', description: 'Interoperability protocol for securely and efficiently transferring data and assets between networks.',
      img: '/assets/images/icons/socketdottech.svg', cost: '$12.8M'},
    {'name': 'Yogapetz', description: 'Instated farming of EXP points, which will be converted\n' +
        'into the WELL token in the future.',
      img: '/assets/images/icons/yogapetz.svg', cost: ''},
    {'name': 'StarryNift', description: 'Creative AI-based metaverse, but what`s most interesting about it is the confirmed retrodrop that has 10% of the total tokenomics allocated to it.',
      img: '/assets/images/icons/starrynift.svg', cost: '$10M'},
    {'name': 'Owlto_Finance', description: 'A convenient and easy to use bridge that supports \n' +
        'all the main L2 chains.',
      img: '/assets/images/icons/owlto.svg', cost: ''},
    {'name': 'taho_xyz', description: 'An open source web3 wallet, browser based and community owned.',
      img: '/assets/images/icons/tahoxyz.svg', cost: ''},
    {'name': 'DeBankDeFi', description: 'Leading crypto wallet for portfolio tracking \n' +
        'and DeFi ranking.',
      img: '/assets/images/icons/debankdefi.svg', cost: '$25M'},

  ];
}
