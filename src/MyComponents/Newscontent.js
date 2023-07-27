import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const Newscontent = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  // document.title = `${this.capiTalize(props.category)} - NewsBar`;

  const capiTalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${page}&pageSize=${props.pageSize}&apiKey=f8f99d244c6141b1b6e23cf607f3c99f`;
    setloading(true);
    let data = await fetch(url);
    props.setProgress(10);
    let parsedData = await data.json();
    setarticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setloading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
  }, []);
  // previoushandle = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${this.state.page - 1}&pageSize=${props.pageSize}&apiKey=f8f99d244c6141b1b6e23cf607f3c99f`;
  //   // this.setState({loading:true});
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json()
  //   // this.setState({
  //   //   page: this.state.page - 1,
  //   //   articles : parsedData.articles,
  //   //   loading : false
  //   // })
  // };
  // nexthandle = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  //   //   if(this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)){

  //   //   }
  //   //   else{
  //   //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${this.state.page + 1}&pageSize=${props.pageSize}&apiKey=f8f99d244c6141b1b6e23cf607f3c99f`;
  //   //   this.setState({loading:true});
  //   //   let data = await fetch(url);
  //   //   let parsedData = await data.json()

  //   //   this.setState({
  //   //     page: this.state.page + 1,
  //   //     articles : parsedData.articles,
  //   //     loading : false
  //   //   })
  //   // }
  // };

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&page=${page + 1}&pageSize=${
      props.pageSize
    }&apiKey=f8f99d244c6141b1b6e23cf607f3c99f`;
    setpage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
  };

  return (
    <>
      <h1 className="text-center bg-dark text-info" style={{marginTop : "70px"}}>
        NewsBar : Top Headlines in {capiTalize(props.category)}
      </h1>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4 my-4 align-center" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    url={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

Newscontent.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};
Newscontent.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default Newscontent;
