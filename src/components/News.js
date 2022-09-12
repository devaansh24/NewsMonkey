import React, { Component } from "react";

import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Modern slavery shoots up by 10 million in five years",
      description:
        "More than half of forced labour happens in richer countries, with women and children most at risk.",
      url: "http://www.bbc.co.uk/news/world-62877388",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/B3AD/production/_126679954_childgetty.jpg",
      publishedAt: "2022-09-12T11:37:20.2129099Z",
      content:
        "By David MolloyBBC News\r\nModern slavery is a growing challenge thanks to a mix of armed conflict, climate change and the global pandemic, a new UN report says. \r\nInternational Labour Organisation (IL… [+2465 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Emmys: Hollywood on stand by for TV stars' big night",
      description:
        "Shows such as Succession, Ted Lasso and Euphoria are in the running for TV's most prestigious awards.",
      url: "http://www.bbc.co.uk/news/entertainment-arts-62796137",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/9FCC/production/_126680904_succession-3-1200x675.jpg",
      publishedAt: "2022-09-12T10:52:19.2198655Z",
      content:
        "Television's most prestigious awards, the Emmys, will be handed out in Los Angeles on Monday night.\r\nThere has been a muted build-up to the event, with some pre-show festivities called off following … [+4842 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC Sport",
      title: "Teenager Alcaraz wins US Open to earn first major",
      description:
        "Spanish teenager Carlos Alcaraz fulfils his potential to become a Grand Slam champion and world number one by beating Casper Ruud in the US Open final.",
      url: "http://www.bbc.co.uk/sport/tennis/62872605",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/7901/production/_126677903_gettyimages-1422911489.jpg",
      publishedAt: "2022-09-12T10:37:33.766074Z",
      content:
        "Carlos Alcaraz is the first teenager to become the men's world number one\r\nSpanish teenager Carlos Alcaraz fulfilled his potential as a future Grand Slam champion and world number one by beating Casp… [+5376 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Japan could lift cap on foreign tourists to lift economy",
      description:
        "Officials are concerned at the yen's slide to its lowest level against the US dollar in 24 years.",
      url: "http://www.bbc.co.uk/news/business-62873518",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/4FA3/production/_126678302_gettyimages-1316215495.jpg",
      publishedAt: "2022-09-12T10:37:23.5633453Z",
      content:
        "By Monica MillerBBC News, Singapore\r\nJapanese officials may further relax border controls for foreign travellers as a way to boost its economy, local reports say.\r\nDeputy Chief Cabinet Secretary Seij… [+991 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Ukraine war: Russians 'outnumbered 8-1' in counter-attack",
      description:
        "Ukraine's army makes significant territorial gains, while Russia hits back with missiles.",
      url: "http://www.bbc.co.uk/news/world-europe-62874557",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/17315/production/_126679949_gettyimages-1243135084.jpg",
      publishedAt: "2022-09-12T10:22:18.5473369Z",
      content:
        "By Merlyn ThomasBBC News\r\nUkrainian forces outnumbered Russians by eight to one in last week's counter-attack in the Kharkiv region, Russia's top occupation official there says. \r\nVitaly Ganchev told… [+1683 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title:
        "Queen Elizabeth II: Your tributes to UK's longest-reigning monarch",
      description:
        "The Queen was a symbol of continuity and reassurance for millions - the BBC is collecting your stories.",
      url: "http://www.bbc.co.uk/news/live/uk-62847455",
      urlToImage:
        "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png",
      publishedAt: "2022-09-12T08:07:27.7354243Z",
      content:
        "Earlier today, the Queen's hearse travelled through the village of Ballater not far from Balmoral. Locals there have spoken of their deep\r\nsadness at the death of someone described as being not just … [+718 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title:
        "China Covid lockdowns leave residents short of food and essential items",
      description:
        "People are appealing for help on social media as food, medicine and sanitary pad supplies dwindle.",
      url: "http://www.bbc.co.uk/news/world-asia-china-62830326",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/53EF/production/_126678412_gettyimages-1419860766.jpg",
      publishedAt: "2022-09-12T08:07:20.8295901Z",
      content:
        "Residents under Covid lockdowns in areas across China are complaining of shortages of food and essential items.\r\nTens of millions of people in at least 30 regions have been ordered to stay at home un… [+3549 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title:
        "Sweden election: Result could take days as vote too close to call",
      description:
        "Anti-immigration Sweden Democrats set to become the second largest party with vote too close to call.",
      url: "http://www.bbc.co.uk/news/world-europe-62872545",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/3955/production/_126677641_anderssonreuters.jpg",
      publishedAt: "2022-09-12T03:52:17.7258753Z",
      content:
        "By Elsa Maishman &amp; Alex BinleyBBC News\r\nSweden's election was too close to call on Sunday night, Prime Minister Magdalena Andersson said.\r\nExit polls at first predicted victory for the incumbent … [+3405 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Prince Andrew to care for Queen's beloved corgis",
      description:
        "The Queen's second son and his ex-wife Sarah, Duchess of York will now look after her iconic dogs.",
      url: "http://www.bbc.co.uk/news/uk-62870783",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/11E29/production/_126675237_c82a2e583aead6f8579fd2636408097a6da8e599.jpg",
      publishedAt: "2022-09-11T17:52:21.1786628Z",
      content:
        "Queen Elizabeth II's corgis are going to live with her son Prince Andrew and his ex-wife, the BBC has confirmed.\r\nThe Duke of York and Sarah, Duchess of York will take on Muick and Sandy - two young … [+2711 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Ukraine war: Shock and joy in newly liberated villages",
      description:
        '"They asked \'is anyone alive?\' and I realised they were ours," says one woman. "They were so beautiful."',
      url: "http://www.bbc.co.uk/news/world-europe-62869157",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/3865/production/_126673441_img_1957.jpg",
      publishedAt: "2022-09-11T12:52:21.1473666Z",
      content:
        "By Orla GuerinBBC News, Kryvyi Rih, Ukraine\r\nNatalia's face lights up as she recalls the moment of her liberation - when the hated occupiers were forced from her village, Novovoznesenske, in the sout… [+5560 chars]",
    },
  ];
  constructor() {
    super();
      this.state = {
          articles: this.articles,
          loading:false
      };
  }
    
    async componentDidMount() {
        let url = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=8b5ac85614e14403bfcf0c96bd292f0b"
        let data = await fetch(url);
        let parsedData=await data.json()
        console.log(data)
        this.setState({articles:parsedData.articles})
    }
    
  render() {
    return (
      <div className="container" my-4 mx-6>
        <h2>NewsMonkey-Top Headlines</h2>
            <div className="row">
                {this.state.articles.map((element) => { 
                    return (
                      <div className="col-md-4" key={element.url}>
                        <NewsItem
                          title={element.title.slice(0,60)}
                          description={element.description.slice(0,120)}
                                imageUrl={element.urlToImage}
                                newsUrl={element.url}
                        />
                      </div>
                    );
                })}
         
           
          </div>
          
        </div>
      
    );
  }
}

export default News;
