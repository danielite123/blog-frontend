const LoadMoreDataBtn = ({ state, fetchDataFun, additionalParams }) => {
  if (state != null && state.totalDocs > state.results.length) {
    return (
      <button
        className="text-dark-grey p-2 px-3 hover:bg-grey/30 rounded-md flex items-center gap-2"
        onClick={() =>
          fetchDataFun({ ...additionalParams, page: state.page + 1 })
        }
      >
        Load more
      </button>
    );
  }
};

export default LoadMoreDataBtn;
