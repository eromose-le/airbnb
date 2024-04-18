export type AuthUser = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
};

export type AuthState = {
  authUser: AuthUser;
  appState: {
    loggedIn: boolean;
  };
};
