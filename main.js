const API_KEY ='4778314702624d38b8918d9c8dbb8b06';
const url1= `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
const url2= `http://times-node-env.eba-appvq3ef.ap-northeast-2.elasticbeanstalk.com/top-headlines`;
const url3=`https://rococo-croissant-3ff41d.netlify.app/top-headlines`;

let newsList = [];
const getLatesNews = async()=> {
  const url = new URL(url3);
  // console.log("uuu:, url")

  const response = await fetch(url);
  const data = await response.json();
  newsList = data.articles;
  render();
  // console.log("aaa", response);
  // console.log("bbb", data);
  console.log("ccc", newsList);
};

const render = () => {
  const newsHTML = ``;

  newsHTML=newsList.map(new=>``)

  document.getElementById("news-board").innerHTML = newsHTML;
}
getLatesNews();


/* https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY} */