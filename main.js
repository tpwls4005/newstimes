const API_KEY ='4778314702624d38b8918d9c8dbb8b06';
let news = []
const getLatesNews = async()=> {
  const url = new URL (`https://rococo-croissant-3ff41d.netlify.app/`);
  // url
  const response = await fetch(url); //await 비동기
  const data = await response.json()
  news = data.articles
  console.log("dddddd", news);
}

getLatesNews();