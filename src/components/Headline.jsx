function Headline(props) {
  return (
    <div className="grid grid-cols-12 pt-5">
      <div className="flex just col-start-2 col-end-12 md:col-start-5 md:col-end-12 sm:col-start-6 sm:col-end-12 lg:col-start-5 lg:col-end-12 xl:col-start-4 xl:col-end-12 border rounded-lg shadow-md px-5 py-5">
        {!props.status ? (
          <div className="flex justify-center items-center w-full">
            <div className="border-l-4 border-stone-950 w-10 h-10 rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="ml-5">
            <div className="font-bold">{props.title}</div>
            <div>{props.description}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Headline;
