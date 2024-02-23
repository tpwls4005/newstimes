const API_KEY = '4778314702624d38b8918d9c8dbb8b06';
const url1 = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
const url2 = `http://times-node-env.eba-appvq3ef.ap-northeast-2.elasticbeanstalk.com/top-headlines`;
const url3 = `https://rococo-croissant-3ff41d.netlify.app/top-headlines`;

let newsList = [];
const menus = document.querySelectorAll(".menus button")
menus.forEach(menu =>
    menu.addEventListener("click", (event) => getNewsByCategory(event))
);

const getLatesNews = async () => {
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
const getNewsByCategory = async(event) => {
  const category = event.target.textContent.toLowerCase();
  console.log("category");
  const url = new URL(url3)(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
  );
  const response = await fetch(url);
  const data = await response.json();
  console.log("ccc", data);
  newsList = data.articles;
  render()
};

const getNewsByKeyword=async ()=>{
  const keyword= document.getElementById("search-input").value;
  console.log("keyword", keyword);
  const url = new URL(url3)(
      `https://newsapi.org/v2/top-headlines?country=us&q=${keyword}&apiKey=${API_KEY}`
  );
  const response = await fetch(url);
  const data = await response.json();
  console.log("ccc", data);
  newsList = data.articles;
  render()
};

const render = () => {
  const newsHTML = newsList.map(news =>
      `<div class="row news">
      <div class="col-lg-4">
        <img class="news-img-size" src="${news.urlToImage}" />
      </div>
      <div class="col-lg-8">
        <h2>${news.title}</h2>
        <img class="news-img"
          src="${
          news.media ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU"
      }" />
        <p>${news.description}</p>
        <p>${
          news.summary == null || news.summary == ""
              ? "내용없음"
              : news.summary.length > 200
                  ? news.summary.substring(0, 200) + "..."
                  : news.summary
      }</p>
        <div>${news.source.name} * ${news.publishedAt}</div>
      </div>
    </div>`
  ).join('');

  document.getElementById("news-board").innerHTML = newsHTML;
};
// 1. 버튼들에게 클릭 이벤트 주기
// 2. 카테고리 별 뉴스 가져오기
// 3. 그 뉴스 보여주기

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
