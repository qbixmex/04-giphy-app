import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components";

describe('Test ons <GifGrid />', () => {
  test('Should show title and spinner loading at beginning', () => {
    const searchText = 'My Hero Academy';
    const loadingText = 'Loading...';

    render(<GifGrid category={{ name: searchText }} />);

    // Elements
    const loading = screen.getByText(loadingText);
    const h2 = screen.getByRole('heading', { level: 2 });

    expect(h2.innerHTML).toBe(searchText);
    expect(loading.innerHTML).toBe(loadingText);
  });
});
