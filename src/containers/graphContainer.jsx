import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as errorAction from '../actions/errorActions';
import * as introspectionAction from '../actions/introspectionActions';
import * as svgAction from '../actions/svgActions';
import * as viewAction from '../actions/viewActions';
import Type from '../components/Type.jsx';
import { FormGroup } from '@material-ui/core';

const mapStateToProps = store => ({
  schema: store.root.schema
})

const mapDispatchToProps = dispatch => ({

})

let svgAttr = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2021pt" height="896pt" xmlns:ev="http://www.w3.org/2001/xml-events" style="overflow: hidden;" class="svg">`

class GraphContainer extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    if (!this.props.schema) return null;
    const typeList = this.props.schema.data.__schema.types.filter((type) => {
      return (
        type.name.charAt(0) !== "_" && type.name.charAt(1) !== "_" && 
        type.kind !== "INPUT_OBJECT" &&
        type.kind !== "SCALAR" && 
        type.kind !== "ENUM" && 
        (type.fields !== null || type.possibleTypes !== null) &&
        type.name.toLowerCase() !== "mutation")
    });

    const nodes = typeList.map(type => {
      // console.log(type)
      return <Type fields={type.fields} name={type.name} possibleTypes={type.possibleTypes}/>
    })

    return(
        <div className="nodes">
            {svgAttr}
            {nodes}
        </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GraphContainer);









// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as errorAction from '../actions/errorActions';
// import * as introspectionAction from '../actions/introspectionActions';
// import * as svgAction from '../actions/svgActions';
// import * as viewAction from '../actions/viewActions';
// import Type from '../components/Type.jsx';
// import { FormGroup } from '@material-ui/core';

// const mapStateToProps = store => ({
//   schema: store.root.schema
// })

// const mapDispatchToProps = dispatch => ({

// })

// class GraphContainer extends Component {
//   constructor(props) {
//       super(props);
//   }

//   render() {
//   // filter introspection query result to related type tables
//     // const typeList = this.props.schema.data.__schema.types.filter((type) => {
//     //   return (type.name.charAt(0) !== "_" && type.name.charAt(1) !== "_" && type.kind !== "SCALAR" && type.kind !== "ENUM" && type.name.toLowerCase() !== "mutation")
//     if (!this.props.schema) return null;
//     const typeList = this.props.schema.data.__schema.types.filter((type) => {
//       return (
//         type.name.charAt(0) !== "_" && type.name.charAt(1) !== "_" && 
//         type.kind !== "INPUT_OBJECT" &&
//         type.kind !== "SCALAR" && 
//         type.kind !== "ENUM" && 
//         (type.fields !== null || type.possibleTypes !== null) &&
//         type.name.toLowerCase() !== "mutation")
//     });

//     const nodes = typeList.map(type => {
//       // console.log(type)
//       return <Type fields={type.fields} name={type.name} possibleTypes={type.possibleTypes}/>
//     })

//     return(
//         <div className="nodes">
//             {nodes}
//         </div>
//     )
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(GraphContainer);
