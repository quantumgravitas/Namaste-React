 import React from "react"
 export class ParentComponent extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={
      count:0
    }
  }
 
  onIncrement=()=>{
    this.setState((prevState)=>({
      count: prevState.count +1 
    }))
  }
  resetCount=()=>{
    this.setState(
      {
        count :0 
      }
    )
  }
  render()
  {
    return (
      <div>
        <p>Count:{this.state.count}</p>
        <ChildComponent count={this.state.count} onIncrementCount={this.onIncrement} resetCount={this.resetCount}></ChildComponent>
      </div>
    )
  }
}

// class ChildComponent extends React.Component
// { 
 
//   render()
//   { 
//     const { count,onIncrementCount,resetCount}=this.props ;
//     return(
//       <div>
//        <p>Child Count:{count}</p>
//        <button onClick={onIncrementCount} className="border border-black p-2 m-2">Increment</button>
//        <button onClick={resetCount} className="border border-black p-2 m-2">Reset Count</button>
//       </div>
//      );
//   } 
// }

const ChildComponent=({count,onIncrementCount,resetCount})=>{
  return(
    <div>
      <div>Count:{count}</div>
      <button onClick={onIncrementCount} className="border border-black p-2 m-2">Increment</button>
      <button onClick={resetCount} className="border border-black p-2 m-2">Reset</button>
    </div>
  )
}