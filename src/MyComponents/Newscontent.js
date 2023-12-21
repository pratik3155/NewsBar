import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const Newscontent = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capiTalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    setLoading(true);
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${page}&pageSize=${props.pageSize}&apiKey=f8f99d244c6141b1b6e23cf607f3c99f`;
      const data = await fetch(url);
      const parsedData = await data.json();
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]); // Fetch data when the page state changes

  const fetchMoreData = async () => {
    try {
      const nextPage = page + 1;
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${nextPage}&pageSize=${props.pageSize}&apiKey=f8f99d244c6141b1b6e23cf607f3c99f`;
      const data = await fetch(url);
      const parsedData = await data.json();
      setArticles([...articles, ...parsedData.articles]);
      setTotalResults(parsedData.totalResults);
      setPage(nextPage);
    } catch (error) {
      console.error("Error fetching more data:", error);
    }
  };

  return (
    <>
      <h1 className="text-center bg-dark text-info" style={{ marginTop: "70px" }}>
        NewsMonkey: Top Headlines in {capiTalize(props.category)}
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
            {articles.map((element) => (
              <div className="col-md-4 my-4 align-center" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage || "https://via.placeholder.com/150"}
                  url={element.url}
                  author={element.author || "Unknown"}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
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
