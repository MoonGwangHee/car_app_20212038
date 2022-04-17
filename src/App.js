import React from 'react';

function Movie({ name, picture }) {
  return(
    <div>
      <h2>I like {name} </h2>
      <img src={picture} alt={name}/>
    </div>
  );
}

const movieILike = [
  {
    name : 'RealSteel',
    image : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20111014_259%2Ftnvlsi1225_13185982075806636D_JPEG%2F2011-10-14_17.58.27.jpg&type=sc960_832',
  },
  {
    name : '검사외전',
    image : 'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https:%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F22536B4656B062A912',
  },
  {
    name : '베테랑',
    image : 'http://cfile7.uf.tistory.com/image/25346046559339B125E1DA',
  },
  {
    name : 'avengers',
    image : 'https://i.aagag.com/Bc7PM.jpg',
  },
  {
    name : 'Stranger Things',
    image : 'https://heraldjournalism.com/wp-content/uploads/2020/11/stranger-things-season-3-cast-guide.jpg',
  },
];



function App() {
  return (
    <div>
      {movieILike.map(kinds => <Movie key={kinds.name} name={kinds.name} picture={kinds.image} />)}
    </div>
  );
}

export default App;
