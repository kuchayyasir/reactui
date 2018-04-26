import React from 'react';
import Button from './bootstrap/button';
import Jumbotron from './bootstrap/jumbotron';
export default class App extends React.Component{
    render()
    {
        return <Jumbotron className="jumbotron jumbotron-fluid text-sm-center" style={{"backgroundImage": "url(img/water.jpg)"}}>
        <div className="container">
            <h1>Building React.js User Interfaces</h1>
            <p>With Bootstrap And SASS!</p>
           <p>
           <Button className="btn btn-primary" style={{'color':'white'}} href="http://www.google.com"/>
           <Button className="btn btn-success" style={{'color':'white'}} href="http://www.google.com"/>
           <Button className="btn btn-lg" style={{'color':'white'}} href="http://www.google.com"/>
           </p>
        </div>
        </Jumbotron>;
    }

}