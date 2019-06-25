import React from 'react';
import './URLList.css';

const urlList = (props) => {
  return (
    <div>
      <form>
        <div className="input-group">
          <ul className="list-group">
            {props.submitted ? props.URL.map((data, i) => {
              return (
                <li className="list-group-item my-list-item"
                  key={i}>
                  <div className="displayURL-parent">
                    <span className="displayURL" onClick={() => props.getRSSData(i, data)}>{data}</span>
                  </div>
                  <div className="button-parent">
                    <button type="button" className="btn btn-danger" aria-hidden="true" onClick={(event) => props.deleteHandler(event, i, data)}>&times;</button>
                  </div>
                </li>
              )
            }) : null}
          </ul>
        </div>
      </form>
    </div>
  )
}

export default urlList;