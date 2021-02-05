import './App.css'
import { Component } from 'react'
import Register from './component/register'
import Students from './component/display'
// import data from './data.json'

class App extends Component {
  constructor() {
    super()
    this.state = {
      insertedData: [{name:"go",age:25}],
    }
  }

  stData = (name,age) => {
    // this.setState({ insertedData: [...this.state.insertedData, studentsData] })
    this.setState((state)=>{
      state.insertedData.push({name:name,age:age})
      return state
    })
    console.log(this.state)
  }

  render = () => {
    return (
      <div>
        <Register addData={this.stData} />
        <Students list={this.state.insertedData} />
      </div>
    )
  }
}

export default App
