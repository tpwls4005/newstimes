const API_KEY ='4778314702624d38b8918d9c8dbb8b06';
const url1= `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
const url2="https://rococo-croissant-3ff41d.netlify.app/";

let news = [];
const getLatesNews = async()=> {
  const requestUrl = new URL(url2);
  console.log("dddddd", requestUrl);

  const response = await fetch(url1); //await 비동기
  const data = await response.json()
  news = data.articles;
  console.log("rrr", response);
  console.log("dddddd", data);
  console.log("dddddd", news);
}

getLatesNews();

/* https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY} */