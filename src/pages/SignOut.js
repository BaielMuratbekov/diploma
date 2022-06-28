import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function SignOut() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: 'auth/init' });
    navigate('/');
  }, [dispatch,navigate]);

  return 'asd';
}