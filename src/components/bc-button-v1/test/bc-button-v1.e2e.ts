import { newE2EPage } from '@stencil/core/testing';

describe('bc-button-v1', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bc-button-v1></bc-button-v1>');

    const element = await page.find('bc-button-v1');
    expect(element).toHaveClass('hydrated');
  });
});
