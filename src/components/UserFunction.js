const UserFunction = (props) => {
  const { name, location } = props;
  console.log(props);
  return (
    <div>
      <div className="">
        <div>
          <h3>
            <strong>Name: </strong>
            {name}
          </h3>
          <p>
            <strong>Location: </strong>
            {location}
          </p>
          <p>
            <strong>Hobbies: </strong>Travel
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserFunction;
