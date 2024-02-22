const API_KEY = '4778314702624d38b8918d9c8dbb8b06';
const url1 = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
const url2 = `http://times-node-env.eba-appvq3ef.ap-northeast-2.elasticbeanstalk.com/top-headlines`;
const url3 = `https://rococo-croissant-3ff41d.netlify.app/top-headlines`;

let newsList = [];
const getLatesNews = async () => {
  const url = new URL(url3);
  // console.log("uuu:, url")

  const response = await fetch(url);
  const data = await response.json();
  newsList = data.articles;
  // console.log("aaa", response);
  // console.log("bbb", data);
  console.log("ccc", newsList);
};

const render = () => {
  const newsHTML = ``;
  newsHTML = newsList.map(news => `<div class="row news">
      <div class="col-lg-4">
        <img class="news-img-size"
             src=""${news.urlToImage} />
      </div>
      <div class="col-lg-8">
        <h2>${news.title}</h2>
        <p>
          ${news.description}
        </p>
        <div>
          ${news.source.name} * ${news.publishedAt}
        </div>
      </div>
    </div>`)
  document.getElementById("news-board").innerHTML = newsHTML;
};

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

const openSearchBox = () => {
  let inputArea = document.getElementById("input-area");
  if (inputArea.style.display === "inline") {
    inputArea.style.display = "none";
  } else {
    inputArea.style.display = "inline";
  }
};

getLatesNews();



