// components/Container.js
import "./Container.css";

const Container = ({ children }) => {
  return (
    <div className="container">
      <div className="home-container">{children}</div>
    </div>
  );
};

export default Container;
