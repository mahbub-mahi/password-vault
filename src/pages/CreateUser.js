import React, { useEffect, useState } from "react";

import { Button, Spinner } from "react-bootstrap";

export default function CreateUser() {
  const [UserData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onEmailChange = (e) => {
    console.log(e.target.value);
    setUserData({
      ...UserData,
      email: e.target.value,
    });
  };
  return (
    <section>
      <h2>Create account</h2>
      <form /* onSubmit={handleSubmit(submitProfile)} */>
        <div>
          <div>
            <label>Email address (required)</label>
            <input
              name="name"
              className="default--input form-control"
              placeholder="Full Name"
              type="text"
              value={UserData.email}
              onChange={onEmailChange}
              //  ref={register({ required: true })}
            />
            {/*  {errors.name && (
              <span className={styles.input__error}>Full Name is required</span>
            )} */}
          </div>

          <div>
            <label>Name</label>
            <input
              name="name"
              className="default--input form-control"
              placeholder="Full Name"
              type="text"
              // defaultValue={profile.name === 'Guest' ? '' : profile.name}
              // onChange={onProfileChange}
              //  ref={register({ required: true })}
            />
            {/*  {errors.name && (
              <span className={styles.input__error}>Full Name is required</span>
            )} */}
          </div>
          <div>
            <label>master password</label>
            <input
              name="name"
              className="default--input form-control"
              placeholder="Full Name"
              type="text"
              // defaultValue={profile.name === 'Guest' ? '' : profile.name}
              // onChange={onProfileChange}
              //  ref={register({ required: true })}
            />
            {/*  {errors.name && (
              <span className={styles.input__error}>Full Name is required</span>
            )} */}
          </div>
          <div>
            <label>Re-type master password (required)</label>
            <input
              name="name"
              className="default--input form-control"
              placeholder="Full Name"
              type="text"
              // defaultValue={profile.name === 'Guest' ? '' : profile.name}
              // onChange={onProfileChange}
              //  ref={register({ required: true })}
            />
            {/*  {errors.name && (
              <span className={styles.input__error}>Full Name is required</span>
            )} */}
          </div>
        </div>

        <>
          <div>
            <div>
              <label>Password</label>
              <input
                name="password"
                placeholder="Password"
                type="password"
                minLength="6"
                maxLength="20"
                //  defaultValue={profile.password}
                //   onChange={onProfileChange}
                //   ref={register({ required: true })}
              />
              {/* {errors.password && (
                <span className={styles.input__error}>
                  Password is required
                </span>
              )} */}
            </div>
          </div>
        </>

        <Button block type="submit">
          Log in
          {/*  {getPinLoading ? (
            <Spinner
              className='btn-spinner'
              animation='border'
              variant='light'
            />
          ) : null} */}
        </Button>

        <Button block type="submit">
          Create account
          {/*  {getPinLoading ? (
            <Spinner
              className='btn-spinner'
              animation='border'
              variant='light'
            />
          ) : null} */}
        </Button>
      </form>
    </section>
  );
}
