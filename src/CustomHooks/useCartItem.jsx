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
      if (!user?.email) {
        return [];
      }
      const res = await axiosSecure.get(`https://tourism-maanagement-server.vercel.app/carts?email=${user.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });
    return [cart,refetch]
};

export default useCartItem;