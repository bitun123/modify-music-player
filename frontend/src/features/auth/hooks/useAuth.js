import { useContext } from "react";
import { registration, login, getAllUsers, logout } from "../services/auth.api";
import { AuthContext } from "../context/AuthContextProvider";
import { useEffect } from "react";

export const useAuth = () => {
  const context = useContext(AuthContext);

  const { user, setUser, loading, setLoading } = context;

  async function handleRegistration({ userName, email, password }) {
    setLoading(true);
    try {
      const data = await registration({ userName, email, password });
      setUser(data.user);
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setLoading(false);
    }
  }
  async function handleLogin({ userName, email, password }) {
    setLoading(true);
    try {
      const data = await login({ userName, email, password });
      setUser(data.user);
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  async function handleGetAllUser() {
    setLoading(true);
    try {
      const data = await getAllUsers();
      setUser(data.users);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
      setUser(null);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }



  return {
    user,
    loading,
    handleRegistration,
    handleLogin,
    handleGetAllUser,
    handleLogout,
  };
};
