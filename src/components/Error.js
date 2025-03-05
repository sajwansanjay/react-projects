import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <div className="container">
        <div>
          <h1>Oops Something Wrong</h1>
          <h2>
            {err.status}: {err.statusText}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Error;
