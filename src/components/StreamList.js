// import React from "react";

// const StreamList = (props) => {

//   useEffect(() => {
//     props.onFetchStreams()
//   });

//   return (
//     <div>
//       <h1>StreamList</h1>
//       <ul>
//       {console.log(props.streams)}
//       {/* props.streams.map((stream) => {
//         return (
//           <li>
//             {stream.id}: {stream.streamTitle} - {stream.streamDescription}
//           </li>
//         )
//       }) */}

//       </ul>
//     </div>
//   );
// };

// export default StreamList

import React, { Component } from "react";
import { connect } from "react-redux";
import { getStreams } from "store/streams/selectors";
import { fetchStreams } from "store/streams/actions";

export class StreamList extends Component {
  
  componentDidMount() {
    this.props.onFetchStreams();
  }

  render() {
    return (
      <div>
        <h1>StreamList</h1>
        <ul>
          {console.log(this.props.streams)}
          {this.props.streams.map((stream) => {
            return (
              <li key={stream.id}>
                {stream.id}: {stream.title} - {stream.description}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  streams: getStreams(state)
});

const mapDispatchToProps = (dispatch) => ({
  onFetchStreams: () => dispatch(fetchStreams()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StreamList);
