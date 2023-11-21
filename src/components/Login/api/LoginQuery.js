import axios from "axios";

export async function Authenticate(username, password) {
  const response = await axios.post(
    "https://stg.dhunjam.in/account/admin/login",
    {
      username: username,
      password: password,
    }
  );

  return response?.data;
}
