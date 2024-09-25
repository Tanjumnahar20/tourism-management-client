import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useCartItem = () => {

  const axiosSecure  = useAxios();
  const {user}  = useAuth();



const {data: cart =[], refetch, isLoading} = useQuery({
    
    queryKey: ['cartItem', user?.email],
    queryFn: async()=>{
        if(isLoading){
            <p>loading</p>
        }
        const res = await axiosSecure.get(`http://localhost:5000/carts?email=${user.email}`);
        // console.log("cart = ", res);
        return res.data
    }

})

    return [cart,refetch]
};

export default useCartItem;