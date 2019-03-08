import React from "react";

const AuthenticationContext = React.createContext({auth: {}});

export const AuthenticationProvider = AuthenticationContext.Provider;
export const AuthenticationConsumer = AuthenticationContext.Consumer;
