import { Component } from '@angular/core';

@Component({
  selector: 'app-tokens-openpager',
  templateUrl: './tokens-openpager.component.html',
  styleUrls: ['./tokens-openpager.component.scss']
})
export class TokensOpenpagerComponent {
  projectsFirst = [
    {'name': 'Eingenlayer', img: '/assets/images/icons/eingenlayer.svg'},
    {'name': 'Monad', img: '/assets/images/icons/monad.svg'},
    {'name': 'Drift Protocol', img: '/assets/images/icons/drift.svg'},
    {'name': 'Entangle', img: '/assets/images/icons/entangle.svg'},
    {'name': 'AltLayer', img: '/assets/images/icons/alterlayer.svg'},
    {'name': 'Marginfi', img: '/assets/images/icons/marginify.svg'},
    {'name': 'Berachain', img: '/assets/images/icons/bearchain.svg'},
    {'name': 'Dymension', img: '/assets/images/icons/dymension.svg'},
    {'name': 'Eclipse', img: '/assets/images/icons/eclipse.svg'},
    {'name': 'Caldera', img: '/assets/images/icons/caldera.svg'},
  ];

projectsSecond = [
    {'name': 'Ether.fi', img: '/assets/images/icons/ether.svg'},
    {'name': 'Swell', img: '/assets/images/icons/swell.svg'},
    {'name': 'Aevo', img: '/assets/images/icons/aewosvg.svg'},
    {'name': 'Polyhedra', img: '/assets/images/icons/polyhedra.svg'},
    {'name': 'Farcana', img: '/assets/images/icons/farcana.svg'},
    {'name': 'Kinza', img: '/assets/images/icons/kinza.svg'},
    {'name': 'Portalcoin', img: '/assets/images/icons/portalcoin.svg'},
    {'name': 'Polymer', img: '/assets/images/icons/polymer.svg'},
    {'name': 'Inscribe', img: '/assets/images/icons/inscribe.svg'},
    {'name': 'BRCport', img: '/assets/images/icons/brcport.svg'},
    {'name': 'Avail', img: '/assets/images/icons/avail.svg'},
    {'name': 'My Pet Hooligan', img: '/assets/images/icons/hooligan.svg'},
  ];

projectsThird = [
    {'name': 'Orbiter', img: '/assets/images/icons/orbiter.svg'},
    {'name': 'Quai Network', img: '/assets/images/icons/network.svg'},
    {'name': 'Parcl', img: '/assets/images/icons/parcl.svg'},
    {'name': 'Avalon', img: '/assets/images/icons/avalon.svg'},
    {'name': 'Kelp DAO', img: '/assets/images/icons/kelp.svg'},
    {'name': 'Ritual', img: '/assets/images/icons/ritual.svg'},
    {'name': 'Dolomite', img: '/assets/images/icons/dolomite.svg'},
    {'name': 'Curvance', img: '/assets/images/icons/curvance.svg'},
  ];
}
