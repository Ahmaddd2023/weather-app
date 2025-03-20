import { Component } from '@angular/core';

@Component({
  selector: 'app-chatgpt',
  templateUrl: './chatgpt.component.html',
  styleUrls: ['./chatgpt.component.scss']
})
export class ChatgptComponent {
//carbon_gateway-security.svg
  //carbon_ibm-cloud-ipsec-vpn.svg
  //carbon_checkmark-outline.svg
  //carbon_globe.svg
  //carbon_user-certification.svg
  //carbon_currency-baht.svg
  descriptions = [
    {'name': 'GPT Mentions', img: '/assets/img/carbon_gateway-security.svg', text: 'Tag GPTs in conversations\n' +
        'for seamless interaction.'},
    {'name': 'Chat Archiving', img: '/assets/img/carbon_ibm-cloud-ipsec-vpn.svg', text: 'Archive chats for a cleaner interface and easy access.'},
    {'name': 'Bulk Chat Archiving', img: '/assets/img/carbon_checkmark-outline.svg', text: 'Archive all chats simultaneously, regardless\n' +
        'of quantity.'},
    {'name': 'Enhanced User Experience', img: '/assets/img/carbon_globe.svg', text:'Intuitive features\n' +
        'for streamlined AI interactions.'},
    {'name': 'Increased Productivity', img: '/assets/img/carbon_user-certification.svg', text: 'Tools for efficient task handling and information retrieval.'},
    {'name': 'Monetization Opportunities', img: '/assets/img/carbon_currency-baht.svg', text: 'Revenue generation for GPT creators in the GPT Store.'},
  ];
}
