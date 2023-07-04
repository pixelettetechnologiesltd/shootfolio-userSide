export const getAuthToken = () => {
  const userInfoString = localStorage.getItem("userInfo");
  if (userInfoString) {
    const userInfo =JSON.parse(userInfoString);
    if(userInfo && userInfo.token)
    return userInfo.token;
  }
  return null;
};
