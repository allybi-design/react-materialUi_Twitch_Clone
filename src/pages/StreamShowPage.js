import React, { Component, createRef } from "react";
import flv from "flv.js";
// import LoadSpinner from "components/LoadSpinner";

class StreamShowPage extends Component {
  constructor(props) {
    super(props);

    this.videoRef = createRef();
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.onLoadfetchStream(id);
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  componentWillUnmount() {
    this.player.destroy()
  }

  buildPlayer(props) {
    if (this.player || !this.props.stream) {
      return;
    }
    const { id } = this.props.match.params;
    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });

    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading....</div>;
    }

    const { title, description } = this.props.stream;

    return (
      <div>
        <h1>Show Page</h1>
        <video ref={this.videoRef} style={{ width: "100%" }} controls />
        <h3>{title}</h3>
        <h4>{description}</h4>
      </div>
    );
  }
}

export default StreamShowPage;
