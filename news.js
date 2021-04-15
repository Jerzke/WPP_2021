
const News =
{ articles:[ {
    name: 'Coinbase',
    header: 'Why Coinbase is a "must-own" stock poised to hit $600: analyst',
    date: 'Wed, April 14, 2021, 11:05 PM',
    id: 0,
    info: 'Test information paragraph section.',
    image: 'images/coinbase.jpg',
    
    story: 'Crypto exchange Coinbase (COIN) set records Wednesday with the largest-ever direct listing as the company saw its valuation nearly hit $100 billion as shares opened for trading on the Nasdaq at $381. But one analyst tells Yahoo Finance shares could still have about 60% to climb to hit $600. MoffettNathanson analyst Lisa Ellis explained her thesis on Yahoo Finance Live shortly before Coinbase shares began trading, calling the stock a "must-own" for any longer term growth investor. "We are positive on the outlook for cryptocurrencies as a massively disruptive technology," she said. "Coinbase, as the only U.S.-listed large-cap stock and the market leader in the space, is really a must-own asset if you are a growth or tech oriented [investor] with a multiyear time horizon." ' },
    
{   name: 'Test headline number 2',
    id: 1,
    info: 'Test information paragraph section. Number 2',
    image: 'images/stonks.jpg' },

{   name: 'Test headline number 2',
    id: 2,
    info: 'Test information paragraph section. Number 2',
    image: 'images/stonks.jpg' },

{   name: 'Test headline number 2',
    id: 3,
    info: 'Test information paragraph section. Number 2',
    image: 'images/stonks.jpg' },

{   name: 'Test headline number 4',
    id: 4,
    info: 'Test information paragraph section. Number 2',
    image: 'images/stonks.jpg' },

{   name: 'Test headline number 2',
    id: 5,
    info: 'Test information paragraph section. Number 2',
    image: 'images/stonks.jpg' },

{   name: 'Test headline number 2',
    id: 6,
    info: 'Test information paragraph section. Number 2',
    image: 'images/stonks.jpg' },

{   name: 'Test headline number 2',
    id: 7,
    info: 'Test information paragraph section. Number 2',
    image: 'images/stonks.jpg' },

{   name: 'Test headline number 8',
    id: 8,
    info: 'Test information paragraph section. Number 2',
    image: 'images/stonks.jpg' }
]};


function click_listeners() {
    var click_article = document.getElementsByClassName('news_article_big');

    for (let i = 0; i < click_article.length; i++) {
        let clicked = click_article[i];
        clicked.addEventListener('click', function(event) {
            let article_clicked = event.target;
            let articles = News.articles;
            let article_header = article_clicked.parentElement.parentElement.querySelector('.article_header').innerText;
            console.log(article_header);
            for (let c = 0, len = articles.length; c < len; c++) {
                if(articles[c].header == article_header){
                    clicked_article = articles[c].name;

                    localStorage.setItem("clicked_article", clicked_article);
                    
                    
                    console.log('works', clicked_article);
                    window.location = "news.html";
                }
            }
        })
    }
}

function print_index() {
    let news = News.articles;
    for(let i = 0, len = news.length; i < len; i++) {
        let article_image = news[i].image;
        let article_name = news[i].name;
        let article_id = news[i].id;
        let article_header = news[i].header;
        let article_date = news[i].date;
        let check_id = article_id / 4;

        if (article_id == 0 || check_id == Math.floor(check_id)){
            let new_div = document.createElement('div');
            new_div.classList.add('news_article_big');
            var news_content = document.getElementsByClassName('news_container')[0];
            var content = `<div class="article_image"> <img src="${article_image}" alt="${article_name}" style="height:100%; width:100%;"></div>
            <div class="article_header"> <h2>${article_header}</h2></div> <div><p>${article_date}</p> </div>` 
            new_div.innerHTML = content;
            news_content.append(new_div);
            click_listeners();
        }   else {
                let new_div = document.createElement('div');
                new_div.classList.add('news_article_small');
                var news_content = document.getElementsByClassName('news_container')[0];
                var content = `<div class="article_image"> <img src="${article_image}" alt="${article_name}" style="height:100%; width:100%;"> </div>` 
                new_div.innerHTML = content;
                news_content.append(new_div);
                
            }
    }
}

function print_news() {
    let news = News.articles;
    
    for(let i = 0, len = news.length; i < len; i++) {
        result = localStorage.getItem("clicked_article")
        let article_status = news[i].clicked;
        let article_name = news[i].name;
        if (result == article_name) {
            /*let new_div = document.createElement('div');
            new_div.classList.add('news_page_article')
            var news_page_content = document.getElementsByClassName(news_page_container)*/
            console.log('very much working');
        }
    }
}