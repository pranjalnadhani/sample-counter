import { PureComponent } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class CounterClass extends PureComponent {
  static propTypes = {
    count: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired,
    FinishComponent: PropTypes.element.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + this.props.step });
  };

  decrement = () => {
    this.setState({ count: this.state.count - this.props.step });
  };

  componentDidMount() {
    console.log("mount initialisation");
  }

  componentWillUnmount() {
    console.log("cleanup");
  }

  render() {
    if (this.state.count === 0) {
      return this.props.FinishComponent;
    }

    return (
      <div>
        <p>Class Count: {this.state.count}</p>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <div>
          <Link to="/counter-function">Go to Counter Function</Link>
          <br />
          <a href="/counter-function">Go to Counter Function</a>
        </div>
      </div>
    );
  }
}
