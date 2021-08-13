import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bc-alert-v1',
  styleUrl: 'bc-alert-v1.css',
  shadow: true,
})
export class BcAlertV1 {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
