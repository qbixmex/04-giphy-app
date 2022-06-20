import { render } from "@testing-library/react";
import { GiphyItem } from "../../components";

describe('Test on <GiphyItem />', () => {

  const title = 'Dragon Ball Super';
  const url = 'https://giphy.com/dragon-ball-super.gif';

  test('Should match with snapshot', () => {
    const { container } = render(
      <GiphyItem title={ title } url={ url } />
    );
    expect(container).toMatchSnapshot();
  });

  test('Should has an image with alt and url', () => {
    const { container } = render(
      <GiphyItem title={ title } url={ url } />
    );

    const { src, alt } = container.querySelector('#giphy-img');

    expect(src).toBe(url);
    expect(alt).toBe(title);

  });

  test('Should has a footer title', () => {
    const { container } = render(
      <GiphyItem title={ title } url={ url } />
    );

    const pTitle = container.querySelector('#footer');

    expect(pTitle.innerHTML).toBe(title);
  });

});