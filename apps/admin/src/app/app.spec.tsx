import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { randomDelay } from '@org/shared-test-utils';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should have Admin Dashboard as the title', () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(getByText('Admin Dashboard')).toBeTruthy();
  });

  describe('performance benchmark', () => {
    it('should introduce delay for benchmark testing', async () => {
      await randomDelay();
      expect(true).toBe(true);
    });
  });
});
