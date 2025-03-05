import UserFunction from "./UserFunction";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <div className="container">
        <div>
          <h1>ABOUT US</h1>
          <p>
            Swiggy is a new-age consumer-first organization offering an
            easy-to-use convenience platform, accessible through a unified app.
          </p>
        </div>
        <div>
          <h2>get to know us</h2>
          <h3>Mission</h3>
          <p>
            Our mission is to elevate the quality of life of the urban consumer
            by offering unparalleled convenience. Convenience is what makes us
            tick. It’s what makes us get out of bed and say, “Let’s do this.
          </p>
        </div>
        <div className="w-100">
          <h2>Team</h2>
          <div className="team-container">
            <UserFunction name={"Sanjay Sajwan"} location={"Pauri"} />
            <UserClass name={"Manoj Sajwan"} location={"Rishikesh"} />
            <UserClass name={"Manoj Aswal"} location={"Dehradun"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
