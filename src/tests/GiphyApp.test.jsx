import { fireEvent, render, screen } from "@testing-library/react";
import GiphyApp from "../GiphyApp";

describe('Tests on <GiphyApp />', () => {
  test('should has a title, form and a button with add text', () => {
    const title = 'GiphyApp';
    const searchTerm = 'Dragon Ball Super';

    render(<GiphyApp />);

    const h1 = screen.getByRole('heading', { level: 1 });
    const form = screen.getByRole('form', { name: 'form' });

    expect(h1.innerHTML.trim()).toBe(title);
    expect(form).toBeTruthy();
  });

  test('should show Loading... if user send a search term', () => {
    const searchTerm = 'Dragon Ball Super';
    const loadingText = 'Loading...';

    render(<GiphyApp />);

    const form = screen.getByRole('form', { name: 'form' });
    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: searchTerm }});
    fireEvent.submit(form);

    const loading = screen.getByText(loadingText)

    expect(loading.innerHTML).toBe(loadingText);
  });
});
