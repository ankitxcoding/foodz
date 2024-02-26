const Shimmer = () => {
  const shimmerBlocks = (n) => {
    const shimmerCards = [];
    for (let i = 0; i < n; i++) {
      shimmerCards.push(
        <div
          key={i}
          className="m-4 w-52 h-auto bg-gray-200 rounded-lg overflow-hidden"
        >
          <div className="w-auto h-32 bg-gray-300 text-transparent">.</div>
          <div className="w-3/4 mx-2 my-4 bg-gray-300 text-transparent">.</div>
          <div className="w-2/3 mx-2 my-4 bg-gray-300 text-transparent">.</div>
          <div className="w-1/4 mx-2 my-4 bg-gray-300 text-transparent">.</div>
          <div className="w-1/2 mx-2 my-4 bg-gray-300 text-transparent">.</div>
          <div className="w-1/3 mx-2 my-4 bg-gray-300 text-transparent">.</div>
        </div>
      );
    }
    return shimmerCards;
  };

  return (
    <>
      <div className="flex m-4">
        <div className="mx-1 px-20 text-transparent bg-gray-300 rounded-lg">
          Search
        </div>
        <div className="mx-1 px-4 text-transparent bg-gray-300 rounded-lg">
          Search
        </div>
        <button className="mx-1 px-4 text-transparent bg-gray-300 rounded-lg">
          Top Rated Restaurant
        </button>
      </div>
      <div className="m-4 flex flex-wrap">{shimmerBlocks(12)}</div>
    </>
  );
};

export default Shimmer;
