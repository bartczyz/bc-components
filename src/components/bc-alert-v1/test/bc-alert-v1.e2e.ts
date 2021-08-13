import { newE2EPage } from '@stencil/core/testing';

describe('bc-alert-v1', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bc-alert-v1></bc-alert-v1>');

    const element = await page.find('bc-alert-v1');
    expect(element).toHaveClass('hydrated');
  });
});
