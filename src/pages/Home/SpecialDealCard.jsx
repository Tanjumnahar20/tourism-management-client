// import { useHistory } from 'react-router-dom';

const SpecialDealCard = (deal) => {
  // const history = useHistory();

  const handleClick = () => {
    history.push(`/details/${deal.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="relative bg-white rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 duration-300"
    >
      <img
        src={deal.image}
        alt={deal.title}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{deal.title}</h3>
        <p className="text-xl text-gray-600 mb-4">{deal.price}</p>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300 p-6">
        <p>{deal.description}</p>
      </div>
    </div>
  );
};

export default SpecialDealCard;
