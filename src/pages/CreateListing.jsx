import React from "react";

function CreateListing() {
  const [formData, setFormData] = React.useState({
    type: "sale",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
  });
  const { type, name, bedrooms, bathrooms } = formData;
  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  return (
    <main className="max-w-md px-2 mx-auto">
      <h1 className="text-3xl text-center mt-6 font-bold">Create Listing</h1>
      <form className="text-lg mt-6 font-semibold">
        <p>Sell / Rent</p>
        <div className="flex">
          <button
            type="button"
            id="type"
            value="sale"
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-300 ease-in-out w-full mr-2 ${
              type === "rent"
                ? "bg-white text-black"
                : "text-white bg-slate-600"
            }`}
          >
            sell
          </button>
          <button
            type="button"
            id="type"
            value="rent"
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-300 ease-in-out w-full ${
              type === "sale"
                ? "bg-white text-black"
                : "text-white bg-slate-600"
            }`}
          >
            rent
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold">Name</p>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onChange}
          placeholder="Name"
          required
          maxLength="32"
          minLength="3"
          className="w-full px-4 py-2 text-xl rounded bg-white text-gray-700 border border-gray-300 transition duration-300 ease-in-out 
          focus:text-gray-700 focus:border-slate-600 focus:shadow-lg mb-6"
        />
        <div className="flex space-x-6 mb-6">
          <div>
            <p>Bedrooms</p>
            <input
              type="number"
              id="bedrooms"
              value={bedrooms}
              onChange={onChange}
              required
              min="1"
              max="10"
              className="w-full px-4 py-2 text-xl rounded bg-white text-gray-700 border border-gray-300 transition duration-300 ease-in-out text-center
              focus:text-gray-700 focus:border-slate-600 focus:shadow-lg"
            />
          </div>
          <div>
            <p>Bathrooms</p>
            <input
              type="number"
              id="bathrooms"
              value={bathrooms}
              onChange={onChange}
              required
              min="1"
              max="10"
              className="w-full px-4 py-2 text-xl rounded bg-white text-gray-700 border border-gray-300 transition duration-300 ease-in-out 
             focus:bg-white focus:text-gray-700 focus:border-slate-600 focus:shadow-lg text-center"
            />
          </div>
        </div>
        <p >Parking spot</p>
        <div className="flex">
          <button
            type="button"
            id="type"
            value="sale"
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-300 ease-in-out w-full mr-2 ${
              type === "rent"
                ? "bg-white text-black"
                : "text-white bg-slate-600"
            }`}
          >
            sell
          </button>
          <button
            type="button"
            id="type"
            value="rent"
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-300 ease-in-out w-full ${
              type === "sale"
                ? "bg-white text-black"
                : "text-white bg-slate-600"
            }`}
          >
            rent
          </button>
        </div>
        <div className="flex">
          <button
            type="button"
            id="type"
            value="sale"
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-300 ease-in-out w-full mr-2 ${
              type === "rent"
                ? "bg-white text-black"
                : "text-white bg-slate-600"
            }`}
          >
            sell
          </button>
          <button
            type="button"
            id="type"
            value="rent"
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-300 ease-in-out w-full ${
              type === "sale"
                ? "bg-white text-black"
                : "text-white bg-slate-600"
            }`}
          >
            rent
          </button>
        </div>
      </form>
    </main>
  );
}

export default CreateListing;
