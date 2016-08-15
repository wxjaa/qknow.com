import React, {Component} from "react";
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import logo from '../images/u57.png';
import Search from './Search';



const style = {
  marginTop: 13,
  marginLeft:5,
  height:34
};



class Top extends Component{
  render(){
    return (
      <div className="row top">
        <div className="col-xs-12 col-sm-4 col-md-3 col-lg-2">
          <a href='#'>
            <img src={logo} alt='' width="80px" height="60px" />
          </a>
        </div>
        <div className="col-xs-12 col-sm-4 col-md-8 col-lg-8">
          <div className="row end-xs">
              <div className="col-xs-8 col-sm-12 col-md-8 col-lg-8">
                <Search />
              </div>
          </div>

        </div>
        <div className="col-xs-12 col-sm-4 col-md-3 col-lg-2">
          <FlatButton label="登陆" labelStyle={{'fontWeight':'bold',color:'#fff'}}   style={style} />
          <RaisedButton label="加入我们" labelStyle={{'fontWeight':'bold'}}
            backgroundColor='#FACB51'
            labelColor='#fff'
            style={style} />

        </div>
      </div>
    )
  }
};

export default Top