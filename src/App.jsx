import React from 'react'
import Card from './components/Card'

function App() {
  let data = [
    {
      title : "Project One",
      description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit quidem quasi ducimus illo non excepturi, molestias id possimus aperiam iusto quas! Adipisci soluta asperiores nobis perferendis, nisi sint ex architecto!"
    },
    {
      title : "Project Two",
      description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."
    },
    {
      title : "Project Three",
      description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quisquam, error quod sed cumque, odio distinctio velit nostrum temporibus necessitatibus et facere atque iure perspiciatis mollitia recusandae vero vel quam!"
    },
    {
      title : "Project Four",
      description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."
    },
    {
      title : "Project Five",
      description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."
    },
    {
      title : "Project Six",
      description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque earum nostrum suscipit ducimus nihil provident, perferendis rem illo, voluptate atque, sit eius in voluptates, nemo repellat fugiat excepturi! Nemo, esse."
    }
  ]
  return <>
    <div className="container">
      <h1 className="my-4">Page Heading
        <small>Secondary Text</small>
      </h1>      
      <div className="row">
        {
          data.map((e,i)=>{
            return <Card cardData ={e} key={i}/>
          })
        }        
      </div>
    </div>
  </>
}

export default App