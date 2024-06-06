const setTokenCookies = async (accessToken, refreshToken) => {
  await Cookies.set("access_token", accessToken, {
    domain: "your-backend-domain",
    path: "/",
    secure: true,
    sameSite: "None",
  });
  await Cookies.set("refresh_token", refreshToken, {
    domain: "your-backend-domain",
    path: "/",
    secure: true,
    sameSite: "None",
  });
};
