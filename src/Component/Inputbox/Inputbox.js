import React from 'react';
import './Inputbox.css';

const inputBox = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <form>
                        <div className="input-group mb-3 input-style">
                            <input type="text" id="urlText" required="required" className="form-control" placeholder="input URL"
                                onChange={props.changed} />
                        </div>
                    </form>
                </div>
                <div className="col-md-3">
                    <input className="btn btn-primary" type="button" value="Submit" onClick={props.clicked}></input>
                </div>
            </div>
        </div>
    )
}
export default inputBox;