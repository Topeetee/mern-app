import React, { useEffect, useRef, useState } from 'react';



const CreateExercise = () => {
  const [state, setState] = useState({
    username: '',
    description: '',
    duration: 0,
    date: new Date(),
    users: []
  });

  const userInput = useRef(null);

  useEffect(() => {
    setState({
      users: ['test user'],
      username: 'test user'
    });
  }, []);

  function onChangeUsername(e) {
    setState({
      ...state,
      username: e.target.value
    });
  }

  function onChangeDescription(e) {
    setState({
      ...state,
      description: e.target.value
    });
  }

  function onChangeDuration(e) {
    setState({
      ...state,
      duration: e.target.value
    });
  }

  function onChangeDate(date) {
    setState({
      ...state,
      date: date
    });
  }

  function onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: state.username,
      description: state.description,
      duration: state.duration,
      date: state.date
    };

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
            ref={userInput}
            required
            className="form-control"
            value={state.username}
            onChange={onChangeUsername}
          >
            {state.users.map(function (user) {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            className=""
            value={state.description}
            onChange={onChangeDescription}
          />
        </div>
        <div className="">
          <label>Duration (in minutes): </label>
          <input
            type="text"
            className=""
            value={state.duration}
            onChange={onChangeDuration}
          />
        </div>
        <div className="">
          <label>Date: </label>
          <div className="flex items-center justify-center">
            <div
              className="relative mb-3 xl:w-96"
              data-te-datepicker-init
              data-te-input-wrapper-init>
              <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                placeholder="Select a date" onChange={onChangeDate} />
              <label
                for="floatingInput"
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
              >Select a date</label
              >
            </div>
          </div>
        </div>

        <div className="">
          <input type="submit" value="Create Exercise Log" className="" />
        </div>
      </form>
    </div>
  );
};

export default CreateExercise;
