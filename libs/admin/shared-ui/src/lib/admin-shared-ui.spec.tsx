import { render } from '@testing-library/react';
import { randomDelay } from '@org/shared-test-utils';

import AdminSharedUi from './admin-shared-ui';

describe('AdminSharedUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdminSharedUi />);
    expect(baseElement).toBeTruthy();
  });

  describe('performance benchmark', () => {
    it('should introduce delay for benchmark testing', async () => {
      await randomDelay(130000);
      expect(true).toBe(true);
    });
  });
});
