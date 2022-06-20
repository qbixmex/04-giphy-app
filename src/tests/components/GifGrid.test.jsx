import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../components';
import useFetchGifs from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Test ons <GifGrid />', () => {
  const searchText = 'My Hero Academy';

  test('Should show title and spinner loading at beginning', () => {

    const loadingText = 'Loading...';

    useFetchGifs.mockReturnValue({
      gifs: [],
      isLoading: true
    });

    render(<GifGrid category={{ name: searchText }} />);

    // Elements
    const loading = screen.getByText(loadingText);
    const h2 = screen.getByRole('heading', { level: 2 });

    expect(h2.innerHTML).toBe(searchText);
    expect(loading.innerHTML).toBe(loadingText);
  });

  test('Should show items when images were loaded with useFetchGifs hook', () => {
    const searchText = 'My Hero Academy';

    useFetchGifs.mockReturnValue({
      gifs: [
        {
          id: '123',
          title: 'Dragon Ball',
          url: 'https://localhost/dragon-ball.gif'
        },
        {
          id: '345',
          title: 'Dragon Ball Z',
          url: 'https://localhost/dragon-ball-z.gif'
        },
        {
          id: '678',
          title: 'Dragon Ball Super',
          url: 'https://localhost/dragon-super.gif'
        }
      ],
      isLoading: false
    });

    render(<GifGrid category={{ name: searchText }} />);
    
    expect(screen.getAllByRole('img').length).toBe(3);
  });
});
