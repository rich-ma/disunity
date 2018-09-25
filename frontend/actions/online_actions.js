export const LOGGED_IN = "LOGGED_IN";
export const LOGGED_OUT = "LOGGED_OUT";

export const userLoggedIn = id => ({
  type: LOGGED_IN,
  userId: id
});

export const userLoggedOut = id => ({
  type: LOGGED_OUT,
  userId: id
});
