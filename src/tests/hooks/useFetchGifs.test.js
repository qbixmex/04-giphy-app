import { renderHook, waitFor } from '@testing-library/react';
import useFetchGifs from '../../hooks/useFetchGifs';

describe('Tests on useFetchGifs Hook', () => {
  test('should return initial state', () => {
    const searchTerm = 'Mazinger Z';
    const { result } = renderHook(() => useFetchGifs(searchTerm));
    const { gifs, isLoading } = result.current;
    expect( gifs.length ).toBe(0);
    expect( isLoading ).toBe(true);
  });

  test('should return gifs array and isLoading in false', async () => {
    const searchTerm = 'Mazinger Z';

    const { result } = renderHook(() => useFetchGifs(searchTerm));

    await waitFor(
      () => expect(result.current.gifs.length).toBeGreaterThan(0),
      { timeout: 1000 }
    );

    const { gifs, isLoading } = result.current;

    expect( gifs.length ).toBeGreaterThan(0);
    expect( isLoading ).toBe(false);
  });
});