const Shimmer = () => {
  const shimmerBlocks = (n) => {
    const shimmerCards = [];
    for (let i = 0; i < n; i++) {
      shimmerCards.push(
        <div
          key={i}
          className="m-5 w-60 h-auto bg-gray-100 shadow-lg shadow-gray-300 rounded-lg overflow-hidden"
        >
          <div className="w-auto h-32 bg-gray-200 shadow shadow-gray-300"></div>
          <div className="w-3/4 h-6 mx-2 my-4 bg-gray-200 shadow shadow-gray-300"></div>
          <div className="w-2/3 h-6 mx-2 my-4 bg-gray-200 shadow shadow-gray-300"></div>
          <div className="w-1/4 h-6 mx-2 my-4 bg-gray-200 shadow shadow-gray-300"></div>
          <div className="w-1/2 h-6 mx-2 my-4 bg-gray-200 shadow shadow-gray-300"></div>
          <div className="w-1/3 h-6 mx-2 my-4 bg-gray-200 shadow shadow-gray-300"></div>
        </div>
      );
    }
    return shimmerCards;
  };

  return (
    <>
      <div className="flex m-4 justify-center">
        <div className="mx-1 px-20 text-transparent bg-gray-200 rounded-lg shadow shadow-gray-300">
          Search
        </div>
        <div className="mx-1 px-4 text-transparent bg-gray-200 rounded-lg shadow shadow-gray-300">
          Search
        </div>
        <button className="mx-1 px-4 text-transparent bg-gray-200 rounded-lg shadow shadow-gray-300">
          Top Rated Restaurant
        </button>
      </div>
      <div className="m-4 flex flex-wrap justify-center">{shimmerBlocks(10)}</div>
    </>
  );
};

export default Shimmer;
