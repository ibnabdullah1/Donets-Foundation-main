import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetCards from "./useGetCards";

const useGetPhoneById = () => {
  const [phone, setPhone] = useState({});
  const { id } = useParams();
  const [phones] = useGetCards();

  useEffect(() => {
    const findPhone = phones?.find((phone) => phone.id === id);
    setPhone(findPhone);
  }, [id, phones]);

  return phone;
};

export default useGetPhoneById;
