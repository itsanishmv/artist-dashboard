import React, { useEffect, useState } from "react";
import { updateCustomPrice } from "../../components/Dashboard/api/AdminDetailsQuery";
import { getAdminDetailsQuery } from "../../components/Dashboard/api/AdminDetailsQuery";
function useAdmin() {
  const [admin, setAdmin] = useState();
  const [customAmount, setCustomAmount] = useState(admin?.amount.category_6);
  const [isRefetch, setIsRefetch] = useState(false);
  useEffect(() => {
    async function getAdminDetails() {
      const adminDetails = await getAdminDetailsQuery(4);
      setAdmin(adminDetails?.data);
      setCustomAmount(adminDetails?.data.amount.category_6);
    }
    getAdminDetails();
  }, [isRefetch]);
  async function updatePrice() {
    const response = await updateCustomPrice(customAmount);
    if (response?.data) {
      setIsRefetch(!isRefetch);
    }
  }
  return { setCustomAmount, customAmount, admin, updatePrice };
}

export default useAdmin;
