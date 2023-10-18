import { createContext, useState } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const [users, setUsers] = useState(null);

  const authInfo = {
    users,
    setUsers,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
AuthProviders.propTypes = {
  children: PropTypes.node,
};
