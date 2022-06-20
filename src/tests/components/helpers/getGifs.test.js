import { getGifs } from "../../../helpers/getGifs";

describe('Test on getGifs()', () => {

  test('Should return gifs array', async () => {
    const gifs = await getGifs('Dragon Ball Super');

    expect(gifs.length).toBe(10);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    })
    expect(gifs[0].url.includes('https://')).toBe(true)
    expect(gifs[0].url).toContain('giphy.com');
  });

});