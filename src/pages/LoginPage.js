import React, { useEffect, useState } from "react";

import { Button, Spinner } from "react-bootstrap";

import { useForm } from "react-hook-form";

export default function LoginPage() {
  const [loginData, setLoginData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onEmailChange = (e) => {
    console.log(e.target.value);
    setLoginData({
      ...loginData,
      email: e.target.value,
    });
  };

  return (
    <section>
      <h2>Profile</h2>
      <form /* onSubmit={handleSubmit(submitProfile)} */>
        <div>
          <div>
            <label>Email address (required)</label>
            <input
              name="name"
              className="default--input form-control"
              placeholder="Full Name"
              type="text"
              value={loginData.email}
              onChange={onEmailChange}
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
          Continue
          {/*  {getPinLoading ? (
            <Spinner
              className='btn-spinner'
              animation='border'
              variant='light'
            />
          ) : null} */}
        </Button>

        <Button block type="submit">
          New around here? Create account
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
