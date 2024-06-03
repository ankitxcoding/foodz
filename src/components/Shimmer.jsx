const Shimmer = () => {
  const shimmerBlocks = (n) => {
    const shimmerCards = [];
    for (let i = 0; i < n; i++) {
      shimmerCards.push(
        <div
          key={i}
          className="m-5 w-60 h-auto bg-gray-100 shadow-lg shadow-gray-300 rounded-lg overflow-hidden"
        >
          <div className="w-auto h-36 bg-gray-200 shadow animate-pulse shadow-gray-300"></div>
          <div className="w-3/4 h-6 mx-2 my-5 bg-gray-200 animate-pulse shadow shadow-gray-300"></div>
          <div className="w-2/3 h-6 mx-2 my-5 bg-gray-200 animate-pulse shadow shadow-gray-300"></div>
          <div className="w-1/4 h-6 mx-2 my-5 bg-gray-200 animate-pulse shadow shadow-gray-300"></div>
          <div className="w-1/2 h-6 mx-2 my-5 bg-gray-200 animate-pulse shadow shadow-gray-300"></div>
          <div className="w-1/3 h-6 mx-2 my-5 bg-gray-200 animate-pulse shadow shadow-gray-300"></div>
        </div>
      );
    }
    return shimmerCards;
  };

  return (
    <>
      <div className="flex m-4 items-center justify-center flex-col sm:flex-row">
        <div className="flex justify-center">
          <div className="mx-1 w-60 h-10 px-20 my-1 text-transparent bg-gray-200 rounded-lg shadow shadow-gray-300 animate-pulse"></div>
          <div className="mx-1 w-28 h-10 px-4 my-1 text-transparent bg-gray-200 rounded-lg shadow shadow-gray-300 animate-pulse"></div>
        </div>
        <div className="flex justify-center">
          <button className="mx-1 w-48 h-10 px-4 my-1 text-transparent bg-gray-200 rounded-lg shadow shadow-gray-300 animate-pulse"></button>
        </div>
      </div>
      <div className="m-4 flex flex-wrap justify-center animate-pulse">
        {shimmerBlocks(10)}
      </div>
    </>
  );
};

export default Shimmer;
