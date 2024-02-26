const Shimmer = () => {
  const shimmerBlocks = (n) => {
    const shimmerCards = [];
    for (let i = 0; i < n; i++) {
      shimmerCards.push(
        <div
          key={i}
          className="m-5 w-60 h-auto bg-gray-100 shadow-lg shadow-gray-300 rounded-lg overflow-hidden"
        >
          <div className="w-auto h-32 bg-gray-200 text-transparent shadow shadow-gray-300">.</div>
          <div className="w-3/4 mx-2 my-4 bg-gray-200 text-transparent shadow shadow-gray-300">.</div>
          <div className="w-2/3 mx-2 my-4 bg-gray-200 text-transparent shadow shadow-gray-300">.</div>
          <div className="w-1/4 mx-2 my-4 bg-gray-200 text-transparent shadow shadow-gray-300">.</div>
          <div className="w-1/2 mx-2 my-4 bg-gray-200 text-transparent shadow shadow-gray-300">.</div>
          <div className="w-1/3 mx-2 my-4 bg-gray-200 text-transparent shadow shadow-gray-300">.</div>
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
      <div className="m-4 flex flex-wrap justify-center">{shimmerBlocks(12)}</div>
    </>
  );
};

export default Shimmer;
