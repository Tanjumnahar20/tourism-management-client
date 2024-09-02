import { useLoaderData } from "react-router-dom";

const DestinationCardDetails = () => {
    const { description, destination, price, _id, image } = useLoaderData() || {};
    console.log("useLoaderData() = ", useLoaderData());

    return (
        <div>
            {/* Full-Width Parallax Image Section */}
            <div
                className="relative w-full h-[70vh] bg-cover bg-center bg-fixed"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-white text-4xl md:text-6xl font-bold">{destination}</h1>
                </div>
            </div>

            {/* Main Content Area with Sidebar */}
            <div className="max-w-7xl mx-auto p-6 mt-6 flex gap-6">
                {/* Main Content (70%) */}
                <div className="w-full md:w-9/12 bg-white p-6 shadow-lg rounded-lg">
                    <h1 className="text-black text-4xl md:text-4xl font-bold mb-5">{destination}</h1>
                    <p className="text-gray-700 text-lg mb-4">{description}</p>
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-xl font-semibold text-indigo-600">Price: ${price}</span>
                        <span className="text-sm text-gray-500">ID: {_id}</span>
                    </div>
                    <button className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors duration-300">
                        Book Now
                    </button>
                </div>

                {/* Right Sidebar (30%) */}
                <div className="w-full md:w-3/12 bg-gray-100 p-6 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Travel Tips</h2>
                    <ul className="mb-6">
                        <li className="mb-2 text-gray-600">✔️ Pack light and bring only essentials.</li>
                        <li className="mb-2 text-gray-600">✔️ Always keep a copy of your travel documents.</li>
                        <li className="mb-2 text-gray-600">✔️ Make sure to check the weather forecast.</li>
                        <li className="mb-2 text-gray-600">✔️ Learn a few local phrases if possible.</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Related Destinations</h3>
                    <div className="space-y-4">
                        <div className="flex items-center bg-white p-4 rounded-lg shadow hover:shadow-md transition">
                            <img src="https://via.placeholder.com/60" alt="Related Destination 1" className="w-14 h-14 rounded-full mr-4" />
                            <div>
                                <h4 className="text-gray-800 font-medium">Paris, France</h4>
                                <p className="text-gray-500 text-sm">Explore the city of love.</p>
                            </div>
                        </div>
                        <div className="flex items-center bg-white p-4 rounded-lg shadow hover:shadow-md transition">
                            <img src="https://via.placeholder.com/60" alt="Related Destination 2" className="w-14 h-14 rounded-full mr-4" />
                            <div>
                                <h4 className="text-gray-800 font-medium">Tokyo, Japan</h4>
                                <p className="text-gray-500 text-sm">Experience the modern metropolis.</p>
                            </div>
                        </div>
                        <div className="flex items-center bg-white p-4 rounded-lg shadow hover:shadow-md transition">
                            <img src="https://via.placeholder.com/60" alt="Related Destination 3" className="w-14 h-14 rounded-full mr-4" />
                            <div>
                                <h4 className="text-gray-800 font-medium">Sydney, Australia</h4>
                                <p className="text-gray-500 text-sm">Visit the iconic Sydney Opera House.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationCardDetails;
