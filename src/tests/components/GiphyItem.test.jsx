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

});