import React, {Component} from 'react';
import './style.css'
import profileImg from './img/img.jpg';

class Home extends Component {
  render() {
    return (
      <div className="Box">
        <div className="Intro">
          {/*<div>*/}
            {/*About Me*/}
          <div style={{height: "80%", width: "50%", margin: "0 auto", paddingTop: "20px"}}>
            <img src={profileImg} alt="" style={{width: "100%", borderRadius: "10%"}}/>
          </div>
          <div style={{width: "100%"}}>
            Jingxing Gao
          </div>
        </div>
        <div className="Desc">
          <div>
            Hi, I'm Jingxing(Cyrus) Gao
          </div>
          <div>
            xxx
          </div>
        </div>
      </div>
    );
  }
}

export default Home;