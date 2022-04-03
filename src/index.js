import React, { createElement }  from 'react';
import ReactDOM from 'react-dom';
import FirstC from './Components/FirstC'


const element = React.createElement('h1' , null , "First variable")
const element2 = React.createElement('h2' , null , "Second variable")
const element3 = React.createElement('h3' , null , "Third variable")
const element4 = React.createElement('ol',null,
createElement('li',null,"Hello"),
createElement('li',null,"Unais"),
createElement('li',null,"Ali"),
)

const names = ['Unais' , 'ALi' , 'Simra' ,'Abrak',"eshal","Abrak"]
const element5 = React.createElement('ul',null,
names.map((name,index)=>

  React.createElement('li',{key:index},name))


)
const element6= 
<ol>
{names.map((name,index)=> <li key={index}>{name}</li>)}
</ol>




ReactDOM.render(element , document.getElementById('root'))
ReactDOM.render(element2, document.getElementById('root2'))
ReactDOM.render(element3, document.getElementById('root3'))
ReactDOM.render(element4, document.getElementById('root4'))
ReactDOM.render(element5, document.getElementById('root5'))
ReactDOM.render(element6, document.getElementById('root6'))
