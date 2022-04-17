import React from 'react';

function Movie({name,picture}) {
  return(
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt="description of Movie" />
    </div>
  )
}

const movieILike = [
  {
    name : 'RealSteel',
    image : 'https://duckduckgo.com/?q=realsteel&t=h_&iax=images&ia=images&iai=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F40unecCne0Epkglo59gQcnXqtMf.jpg',
  },
  {
    name : '검사외전',
    image : 'https://duckduckgo.com/?q=%EA%B2%80%EC%82%AC%EC%99%B8%EC%A0%84&t=h_&iar=images&iax=images&ia=images&iai=https%3A%2F%2Fimg1.daumcdn.net%2Fthumb%2FR800x0%2F%3Fscode%3Dmtistory2%26fname%3Dhttps%3A%252F%252Ft1.daumcdn.net%252Fcfile%252Ftistory%252F22536B4656B062A912',
  },
  {
    name : '베테랑',
    image : 'https://duckduckgo.com/?q=%EB%B2%A0%ED%85%8C%EB%9E%91&t=h_&iar=images&iax=images&ia=images&iai=http%3A%2F%2Fcdnweb01.wikitree.co.kr%2Fwebdata%2Feditor%2F201509%2F10%2Fimg_20150910081602_6f43c6c3.jpg',
  },
  {
    name : 'avengers',
    image : 'https://duckduckgo.com/?q=%EC%96%B4%EB%B2%A4%EC%A0%B8%EC%8A%A4&t=h_&iar=images&iax=images&ia=images&iai=http%3A%2F%2Ftalkimg.imbc.com%2FTVianUpload%2Ftvian%2FTViews%2Fimage%2F2019%2F05%2F16%2FaJqrmDkTHe9I636935977813578345.jpg',
  },
  {
    name : 'Stranger Things',
    image : 'https://duckduckgo.com/?q=%EA%B8%B0%EB%AC%98%ED%95%9C+%EC%9D%B4%EC%95%BC%EA%B8%B0&t=h_&iar=images&iax=images&ia=images&iai=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99AB2C395CF731A720',
  },
];

function App() {
  return (
    <div>
      {movieILike.map(kinds => (<Movie key={kinds.name} name={kinds.name} picture={kinds.image} />))}
    </div>
  );
}

export default App;
