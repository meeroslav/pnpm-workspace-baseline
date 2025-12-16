import { render } from '@testing-library/react';
import { randomDelay } from '@org/shared-test-utils';

import AdminFeatureAnalytics from './admin-feature-analytics';

describe('AdminFeatureAnalytics', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdminFeatureAnalytics />);
    expect(baseElement).toBeTruthy();
  });

  describe('performance benchmark', () => {
    it('should introduce delay for benchmark testing', async () => {
      await randomDelay(70000);
      expect(true).toBe(true);
    });
  });
});
