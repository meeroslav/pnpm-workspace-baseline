import { render } from '@testing-library/react';
import { randomDelay } from '@org/shared-test-utils';

import AdminFeatureProducts from './admin-feature-products';

describe('AdminFeatureProducts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdminFeatureProducts />);
    expect(baseElement).toBeTruthy();
  });

  describe('performance benchmark', () => {
    it('should introduce delay for benchmark testing', async () => {
      await randomDelay(70000);
      expect(true).toBe(true);
    });
  });
});
