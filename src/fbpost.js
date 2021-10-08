import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';
import Img1 from './img/1.jpg';
import Img2 from './img/2.jpg';
import Img3 from './img/3.jpg';
import Img4 from './img/4.jpg';
import Img5 from './img/5.jpg';
import Img6 from './img/6.jpg';

function Post(props) {
  return <div className="border">

    <div className="profile">
      <img className="prf" src={props.prf}></img>
    </div>

    <div className="bold">
      {props.name}
    </div>

    <div className="date">
      {props.date}
    </div>

    <div className="text">
      <p>{props.para}</p>
    </div>

    <div className="post">
    <img className="pst" src={props.pst}></img>
    </div>
  </div>
}

ReactDOM.render(<div><Post name="ABDUL RAFEH" date="30/08/2021" prf={Img1} para ="Burj Khalifa" pst = {Img4} />
  <Post name="M SAAD ALI" date="17/08/2021" prf={Img2} para = "Effiel Tower" pst = {Img5} />
  <Post name="M USAMA" date="04/08/2021" prf={Img3} para = "Lamborghini" pst = {Img6} /></div>, document.querySelector('#root'));