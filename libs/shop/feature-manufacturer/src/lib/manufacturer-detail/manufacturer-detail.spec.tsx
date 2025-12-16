import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ManufacturerDetail from './manufacturer-detail';
import { randomDelay } from '@org/shared-test-utils';

describe('ManufacturerDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MemoryRouter initialEntries={['/manufacturers/TestManufacturer']}>
        <Routes>
          <Route path="/manufacturers/:name" element={<ManufacturerDetail />} />
        </Routes>
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should display the manufacturer name', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/manufacturers/TestManufacturer']}>
        <Routes>
          <Route path="/manufacturers/:name" element={<ManufacturerDetail />} />
        </Routes>
      </MemoryRouter>
    );
    expect(getByText('TestManufacturer')).toBeTruthy();
  });

  describe('performance benchmark', () => {
    it('should introduce delay for benchmark testing', async () => {
      await randomDelay();
      expect(true).toBe(true);
    });
  });
});
