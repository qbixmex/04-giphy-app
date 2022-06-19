import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

// const gifs = [
//   {
//     id: 'dxld1UBIiGuoh31Fus',
//     title: 'Dragon Ball GIF by TOEI Animation UK',
//     url: 'https://media4.giphy.com/media/dxld1UBIiGuoh31Fus/giphy.gif?cid=fe14e2d23y1i7jh2kjpq6fkc4yn4e1fp87crw10n3fcwluud&rid=giphy.gif&ct=g',
//   }, 
//   {
//     id: "aAbax5anloMNk6TSP9",
//     title: "Dragon Ball GIF by TOEI Animation UK",
//     url: "https://media4.giphy.com/media/aAbax5anloMNk6TSP9/giphy.gif?cid=fe14e2d23y1i7jh2kjpq6fkc4yn4e1fp87crw10n3fcwluud&rid=giphy.gif&ct=g"
//   },
//   {
//     id: "zKRlxWqdP4NTok3Ppl",
//     title: "Dragon Ball GIF by TOEI Animation UK",
//     url: "https://media1.giphy.com/media/zKRlxWqdP4NTok3Ppl/giphy.gif?cid=fe14e2d23y1i7jh2kjpq6fkc4yn4e1fp87crw10n3fcwluud&rid=giphy.gif&ct=g"
//   },
//   {
//     id: "iD9C2y1prWE87WfXp5",
//     title: "Dragon Ball Ultra Instinct GIF by TOEI Animation UK",
//     url: "https://media1.giphy.com/media/iD9C2y1prWE87WfXp5/giphy-downsized-medium.gif?cid=fe14e2d23y1i7jh2kjpq6fkc4yn4e1fp87crw10n3fcwluud&rid=giphy-downsized-medium.gif&ct=g"
//   }
// ];

const gifs = [];

const GifGrid = ({ category }) => {

  useEffect(() => {
    getGifs(category)
      .then(gifs => console.log( gifs ))
      .catch(console.error)
  }, []);

  return (
    <>
      {
        gifs.map(({ id, title, url }) => {
          return (
            <div key={id} className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className="card mb-4">
                <div className="card-body">
                  <img src={ url} className="card-img-top" alt={ title } />
                </div>
                <div className="card-footer">
                  <p className="mb-0 fw-bold">{ title }</p>
                </div>
              </div>
            </div>
          );
        })
      }
    </>
  );
};

export default GifGrid;
