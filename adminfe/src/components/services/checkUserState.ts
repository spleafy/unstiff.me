export const checkUserState = async (navigate: any, setLoggedIn: any) => {
  const token = "Bearer " + localStorage.getItem("token");

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_ADBE_PORT}/user`,
    {
      method: "GET",
      headers: {
        authorization: token,
      },
    }
  );

  const data = await response.json();

  if (data.data.id.length > 0 && data.status == 200) {
    setLoggedIn(true);
  } else {
    setLoggedIn(false);
    navigate("/");
  }
};
