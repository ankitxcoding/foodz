const MenuShimmer = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="m-4 w-1/2 h-48 bg-gray-100 shadow-md shadow-gray-300 animate-pulse">
          <div className="flex items-center">
            <h1 className="my-4 mx-10  w-60 h-40 bg-gray-200 rounded-md shadow shadow-gray-300 animate-pulse"></h1>
            <div>
              <h1 className="m-4 px-4 py-2 w-96 h-14 bg-gray-200 shadow shadow-gray-300 animate-pulse"></h1>
              <h1 className="m-4 px-4 py-2 w-80 h-8 bg-gray-200 shadow shadow-gray-300 animate-pulse"></h1>
              <h1 className="m-4 px-4 py-2 w-60 h-6 bg-gray-200 shadow shadow-gray-300 animate-pulse"></h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5 animate-pulse">
        <div className="w-1/2 pb-4 border-b border-gray-300 animate-pulse">
          <h1 className="w-60 h-10 bg-gray-200 shadow shadow-gray-300 animate-pulse"></h1>
        </div>
      </div>
      <div className="animate-pulse">
        <div className="flex justify-center animate-pulse">
          <div className="w-1/2 pb-2 animate-pulse">
            <h1 className="mx-4 my-2 w-80 h-8 bg-gray-200 shadow shadow-gray-300 animate-pulse"></h1>
          </div>
        </div>
        <div className="w-1/2 flex justify-between mx-auto border-b border-gray-300 animate-pulse">
          <div className="animate-pulse">
            <div className="animate-pulse">
              <div className="w-1/2 pb-2 animate-pulse">
                <h1 className="mx-8 w-96 h-5 bg-gray-200 shadow shadow-gray-300 animate-pulse"></h1>
              </div>
            </div>
            <div className="animate-pulse">
              <div className="w-1/2 pb-2 animate-pulse">
                <h1 className="mx-8 w-4/5 h-3 bg-gray-200 shadow shadow-gray-300 animate-pulse"></h1>
              </div>
            </div>
          </div>
          <div className="my-2 mx-10 animate-pulse">
            <h1 className="w-32 h-20 bg-gray-200 rounded-md shadow shadow-gray-300 animate-pulse"></h1>
          </div>
        </div>
        <div className="w-1/2 my-2 flex justify-between mx-auto border-b border-gray-300 animate-pulse">
          <div className="animate-pulse">
            <div className="animate-pulse">
              <div className="w-1/2 pb-2 animate-pulse">
                <h1 className="mx-8 w-96 h-5 bg-gray-200 shadow shadow-gray-300 animate-pulse"></h1>
              </div>
            </div>
            <div className="animate-pulse">
              <div className="w-1/2 pb-2 animate-pulse">
                <h1 className="mx-8 w-4/5 h-3 bg-gray-200 shadow shadow-gray-300 animate-pulse"></h1>
              </div>
            </div>
          </div>
          <div className="my-2 mx-10 animate-pulse">
            <h1 className="w-32 h-20 bg-gray-200 rounded-md shadow shadow-gray-300 animate-pulse"></h1>
          </div>
        </div>
        <div className="w-1/2 my-2 flex justify-between mx-auto border-b border-gray-300 animate-pulse">
          <div className="animate-pulse">
            <div className="animate-pulse">
              <div className="w-1/2 pb-2 animate-pulse">
                <h1 className="mx-8 w-96 h-5 bg-gray-200 shadow shadow-gray-300 animate-pulse"></h1>
              </div>
            </div>
            <div className="animate-pulse">
              <div className="w-1/2 pb-2 animate-pulse">
                <h1 className="mx-8 w-4/5 h-3 bg-gray-200 shadow shadow-gray-300 animate-pulse"></h1>
              </div>
            </div>
          </div>
          <div className="my-2 mx-10 animate-pulse">
            <h1 className="w-32 h-20 bg-gray-200 rounded-md shadow shadow-gray-300 animate-pulse"></h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default MenuShimmer;
