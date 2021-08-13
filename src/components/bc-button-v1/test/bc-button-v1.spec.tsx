import { newSpecPage } from '@stencil/core/testing';
import { BcButtonV1 } from '../bc-button-v1';

describe('bc-button-v1', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BcButtonV1],
      html: `<bc-button-v1></bc-button-v1>`,
    });
    expect(page.root).toEqualHtml(`
      <bc-button-v1>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bc-button-v1>
    `);
  });
});
