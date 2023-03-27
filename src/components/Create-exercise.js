import React from 'react'
import { useEffect, useState } from 'react'

const CreateExercise = () => {
  const [state, setState] = useState({
    username: '',
    description: '',
    duration: 0,
    date: new Date(),
    users: []
  })

  useEffect(() => {
    setState({
      users: ["test user"],
      username: "test user"
    })
  }, [])

  function onChangeUsername(e) {
    setState({
      ...state,
      username: e.target.value
    })
  }

  function onChangeDescription(e) {
    setState({
      ...state,
      description: e.target.value
    })
  }

  function onChangeDuration(e) {
    setState({
      ...state,
      duration: e.target.value
    })
  }

  function onChangeDate(date) {
    setState({
      ...state,
      date: date
    })
  }

  function onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: state.username,
      description: state.description,
      duration: state.duration,
      date: state.date
    }

    console.log(exercise);
    window.location = '/';
  }

  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select
            ref="userInput"
            required
            className="form-control"
            value={state.username}
            onChange={onChangeUsername}>
            {
              state.users.map(function (user) {
                return <option
                  key={user}
                  value={user}>{user}
                </option>;
              })
            }
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            value={state.description}
            onChange={onChangeDescription}
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
            type="text"
            className="form-control"
            value={state.duration}
            onChange={onChangeDuration}
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={state.date}
              onChange={onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="" />
        </div>
      </form>
    </div>
  )
}

export default CreateExercise
