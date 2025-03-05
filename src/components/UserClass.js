import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    const { name, location } = this.props;
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
  }
}

export default UserClass;
