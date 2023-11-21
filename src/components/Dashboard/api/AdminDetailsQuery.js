import axios from "axios";

export async function getAdminDetailsQuery(params) {
  const response = await axios.get(
    `https://stg.dhunjam.in/account/admin/${params}`
  );
  return response.data;
}
