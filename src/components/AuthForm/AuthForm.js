import classes from "./AuthForm.module.css";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
function AuthForm() {
  return (
    <div className={classes.Auth}>
        
      <form className={classes.AuthForm}>
      <h3>Entrance</h3>
        <p>Use a Google Account</p>
        <label>
          <FaUserAlt className={classes.AuthForm__icon} />
          <input
            type="email"
            name="email"
            placeholder="Phone or email address"
          />
        </label>
        <label>
          <RiLockPasswordFill className={classes.AuthForm__icon} />
          <input type="password" name="password" placeholder="Password" />
        </label>

        <div className={classes.btn}>
          <button>Sign in</button>
          <button>Sign up</button>
        </div>
      </form>
    </div>
  );
}

export default AuthForm;
