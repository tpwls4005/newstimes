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
  let resultHTML = articles
  .map((news) => {
    return `<div class="news row">
        <div class="col-lg-4">
            <img class="news-img"
                src="${
        news.urlToImage ||
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU"
    }" />
        </div>
        <div class="col-lg-8">
            <a class="title" target="_blank" href="${news.url}">${
        news.title
    }</a>
            <p>${
        news.description == null || news.description == ""
            ? "내용없음"
            : news.description.length > 200
                ? news.description.substring(0, 200) + "..."
                : news.description
    }</p>
            <div>${news.source.name || "no source"}  ${moment(
        news.publishedAt
    ).fromNow()}</div>
        </div>
    </div>`;
  })
  .join("");

  document.getElementById("news-board").innerHTML = resultHTML;
};
