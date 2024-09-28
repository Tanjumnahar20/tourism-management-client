/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useCartItem = () => {

  const axiosSecure  = useAxios();
  const {user}  = useAuth();



  const { data: cart = [], refetch, isLoading } = useQuery({
    queryKey: ['cartItem', user?.email],
    queryFn: async () => {
      // Avoid making the API request if the user or email is not defined
      if (!user?.email) {
        return [];
      }

      const res = await axiosSecure.get(`http://localhost:5000/carts?email=${user.email}`);
      return res.data;
    },
    enabled: !!user?.email, // Only run the query if user.email is defined
  });

    return [cart,refetch]
};

export default useCartItem;