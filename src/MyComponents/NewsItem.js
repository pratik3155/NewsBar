import React from 'react';

const NewsItem = ({ title, description, imageUrl, url, author, date, source }) => {
  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'end', position: 'absolute', right: '50px' }}>
        <span className="translate-middle badge rounded-pill bg-danger">{source}</span>
      </div>
      <img src={!imageUrl ? "https://www.cityam.com/wp-content/uploads/2022/11/S9A7207-3-2.jpg" : imageUrl} className="card-img-top" alt="News" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}.....</p>
        <p className="card-text text-danger">
          <small className="text-danger">By {!author ? "Unknown" : author} On {new Date(date).toUTCString()}</small>
        </p>
        <a rel="noreferrer" href={url} className="btn btn-dark text-light">Read more..</a>
      </div>
    </div>
  );
};

export default NewsItem;
