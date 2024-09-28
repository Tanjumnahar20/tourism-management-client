/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Swal from "sweetalert2";
import useAuth from "../../CustomHooks/useAuth";
import useAxios from "../../CustomHooks/useAxios";
import useCartItem from "../../CustomHooks/useCartItem";
import { useNavigate } from "react-router-dom";


const Bookings = ({place}) => {
  console.log('place', place);
    // const { _id,destination, price,duration} = place;

    const {user} = useAuth();
    const axiosSecure = useAxios();
    const [cart, refetch] = useCartItem();
    console.log(cart);


    const navigate = useNavigate();
    
   
    const handleAddToCart= (place) =>{

        if(user && user.email){
         const cartItem ={
          placeId: _id,
          place:destination,
          price,
         
           email: user.email,
           duration
         }
        axiosSecure.post('/carts', cartItem)
         .then(res=>{
          // console.log(res.data);
           if(res.data.insertedId){
            
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${destination} trip booked!`,
              showConfirmButton: false,
              timer: 1500
            });
           
            //  refetch cart to count item
            refetch();
          }
          })
        }
          else{
            Swal.fire({
              title: "Please, login!",
              text: "login ",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "login now!"
            }).then((result) => {
              if (result.isConfirmed) {
                navigate('/login', {state: {from:location}})
              }
            });
            
          }
      }

    return (
        <div>
            <div className="overflow-x-auto">
            <table className="table">
  <thead>
    <tr>
      <th>#</th>
      <th>Destination</th>
      <th>Price</th>
      <th>Color</th>
    </tr>
  </thead>
  <tbody>
    {cart.map((item, index) => (
      <tr key={item._id}>
        <th>{index + 1}</th>
        <td>{item.destination}</td>
        <td>{item.price}</td>
        <td>Blue</td>
      </tr>
    ))}
  </tbody>
</table>

</div>
        </div>
    );
};

export default Bookings;