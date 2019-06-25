import React from 'react'
import './MainScreen.css';

const mainScreen = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>{props.data}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
        </div>
      </div>
      {props.items.map((item, index) => {
        return (
          <div className="card my-card" key={index}>
            <div className="card-body">
              <div className="card-title my-title">
                <div className="title-holder">
                  <h6>{item.title}</h6>
                </div>
                <div className="date-holder">
                  <span>{item.pubDate}</span>
                </div>
              </div>
              <hr />
              <div className="card-text">
                <p>{item.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}
export default mainScreen;