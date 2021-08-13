import { newSpecPage } from '@stencil/core/testing';
import { BcAlertV1 } from '../bc-alert-v1';

describe('bc-alert-v1', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BcAlertV1],
      html: `<bc-alert-v1></bc-alert-v1>`,
    });
    expect(page.root).toEqualHtml(`
      <bc-alert-v1>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bc-alert-v1>
    `);
  });
});
