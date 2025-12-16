import { render } from '@testing-library/react';
import { randomDelay } from '@org/shared-test-utils';

import OrgFeatureManufacturer from './feature-manufacturer';

describe('OrgFeatureManufacturer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OrgFeatureManufacturer />);
    expect(baseElement).toBeTruthy();
  });

  describe('performance benchmark', () => {
    it('should introduce delay for benchmark testing', async () => {
      await randomDelay(70000);
      expect(true).toBe(true);
    });
  });
});
