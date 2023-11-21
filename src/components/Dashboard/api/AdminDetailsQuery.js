import axios from "axios";

export async function getAdminDetailsQuery(params) {
  const response = await axios.get(
    `https://stg.dhunjam.in/account/admin/${params}`
  );
  return response.data;
}

export async function updateCustomPrice(price) {
  const response = await axios.put(`https://stg.dhunjam.in/account/admin/4`, {
    amount: {
      category_6: price,
    },
  });
  return response.data;
}
