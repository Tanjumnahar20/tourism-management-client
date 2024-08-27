import SpecialDealCard from "./SpecialDealCard";

const SpecialDeals = () => {
    const deals = [
      {
        id: 1,
        title: "Luxurious Beach Resort",
        price: "$3000",
        image: "https://example.com/beach-resort.jpg",
        description: "Experience the ultimate luxury at our exclusive beach resort. Enjoy private villas, fine dining, and world-class amenities.",
      },
      {
        id: 2,
        title: "Mountain Retreat",
        price: "$2500",
        image: "https://example.com/mountain-retreat.jpg",
        description: "Escape to a serene mountain retreat with breathtaking views, cozy lodges, and outdoor adventures.",
      },
      // Add more deals as needed
    ];
  
    return (
      <div className="my-10 px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Special <strong>Deals</strong>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {deals.map((deal) => (
            <SpecialDealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </div>
    );
  };
  
  export default SpecialDeals;