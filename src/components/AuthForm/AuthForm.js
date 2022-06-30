import classes from "./AuthForm.module.css";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { start } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";

function AuthForm() {
  const dispatch = useDispatch();
  const { error, localId } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  function onAuthStart(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    dispatch(
      start({
        email: formData.get("email"),
        password: formData.get("password"),
        method:
          event.nativeEvent.submitter.innerText === "Sign up"
            ? "signup"
            : "signin",
      })
    );
  }

  if (localId !== null) {
    navigate("/");
  }

  let errorOutput = null;
  if (error) {
    errorOutput = <strong className={classes.AuthForm} style={{ color: "red"}}>{error}</strong>;
  }
  return (
    <form onSubmit={onAuthStart}>
      {errorOutput}
      <div className={classes.AuthForm}>
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
      </div>
    </form>
  );
}

export default AuthForm;
