import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bc-button-v1',
  styleUrl: 'bc-button-v1.css',
  shadow: true,
})
export class BcButtonV1 {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
