const API_KEY = '4778314702624d38b8918d9c8dbb8b06';
const url1 = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
const url2 = `http://times-node-env.eba-appvq3ef.ap-northeast-2.elasticbeanstalk.com/top-headlines`;
const url3 = `https://rococo-croissant-3ff41d.netlify.app/top-headlines`;

let newsList = [];
const menus = document.querySelectorAll(".menus button")
menus.forEach(menu =>
    menu.addEventListener("click", (event) => getNewsByCategory(event))
);

const getNews = async () => {
  try {
    const response = await fetch(url);

    const data = await response.json();
    if (response.status === 200) {
      if (data.articles.length === 0) {
        throw new Error("검색 결과가 없습니다.")
      }
      newsList = data.articles;
      render();
    } else {
      throw new Error(data.meaasage);
    }
  } catch (error) {
    errorRender(error.message)
  }
};

const getWeNews = async ()=>{
  const response = await fetch(url)
  const data = await response.json();
  newsList = data.articles;
  render();
}


menus.forEach((menu) =>
    menu.addEventListener("click", (event) => getNewsByCategory(event))
);

const searches = document.querySelectorAll(".search-button");

searches.forEach((search) =>
    search.addEventListener("click", (e) => getNewsByKeyword(e))
);


let url = new URL(`https://rococo-croissant-3ff41d.netlify.app/top-headlines`)
const getLatesNews = async () => {
  url = new URL(url3);
  getNews();
};
const getNewsByCategory = async (event) => {
  const category = event.target.textContent.toLowerCase();
  url = new URL(
      `https://rococo-croissant-3ff41d.netlify.app/top-headlines?category=${category}`
  );
  getNews();
};

const getNewsByKeyword = async (event) => {
  const keyword = document.getElementById("search-input").value;
  url = new URL(
      `https://rococo-croissant-3ff41d.netlify.app/top-headlines?q=${keyword}`
  );
  getNews();
}

const validateImageUrl = (imageUrl) => {
  // image객체 생성
  const image = new Image();
  image.src = imageUrl;
  return image.complete || (image.width + image.height) > 0;
};

const render = () => {
  const validateImageUrl = (imageUrl) => {
    const image = new Image();
    image.src = imageUrl;
    // console.log(image.src);
    return image.complete || (image.width + image.height) > 0;
  };

  const newsHTML = newsList.map(
      (news) => {
        let imageUrl = news.urlToImage ? news.urlToImage : '/images/noImg.jpg';
        const validateImage = validateImageUrl(imageUrl);
        if (!validateImage) {
          imageUrl = '/images/noImg.jpg';
        }
        return`<div class="row news">
    <div class="col-lg-4">
      <img class="news-img-size" src= ${imageUrl}
      />
    </div>    
    <div class="col-lg-8">
      <h2>${news.title}</h2>
      <p>
        ${
            news.description == null || news.description == ""
                ? "내용없음"
                : news.description.length > 200
                    ? news.description.substring(0, 200) + "..."
                    : news.description
        }
     </p>
           
      <div>        
        ${news.source.name == null || news.source.name == ""
            ? "no source"
            : news.source.name
        } * ${news.publishedAt}
      </div>      
    </div>
  </div>`
      }).join('');

  document.getElementById("news-board").innerHTML = newsHTML;
};
// 1. 버튼들에게 클릭 이벤트 주기
// 2. 카테고리 별 뉴스 가져오기
// 3. 그 뉴스 보여주기

const errorRender = (errorMessage) => {
  const errorHTML = `<div class="alert alert-danger" role="alert">
${errorMessage}</div>`

  document.getElementById("news-board").innerHTML = errorHTML;
}

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
