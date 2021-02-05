import { Component } from 'react'
import React from 'react'
import { Button,FormGroup,Input} from 'reactstrap'

export default class Register extends Component {
  constructor() {
    super()
    //initial state:
    this.state = {
      name: '',
      age: '',
    }
  }
  AddStudent = () => {
    console.log(this.props)
    this.props.addData(this.state.name,this.state.age )
    this.setState({ name: '', age: '' })
  }

  nameChanged = (nm) => {
    this.setState({ name: nm.target.value })
  }

  ageChanged = (ag) => {
    this.setState({ age: ag.target.value })
  }

  render() {
    return (
      <div className="container mt-3 text-center">
        <FormGroup>
        <Button color="danger">Danger!</Button>

          <Input
            type="text"
            name="text"
            id="exampleName"
            placeholder="Enter your name"
            value={this.state.name}
            onChange={this.nameChanged}
            required
          />
          {/* <p>Name: {this.state.name}</p> */}
        </FormGroup>
        <FormGroup>
          <Input
            type="number"
            name="age"
            id="exampleAge"
            placeholder="Enter your age"
            value={this.state.age}
            onChange={this.ageChanged}
            required
          />
          {/* <p>Age: {this.state.age}</p> */}
        </FormGroup>
        <Button color="primary" onClick={this.AddStudent}>
          Add
        </Button>{' '}
      </div>
    )
  }
}
