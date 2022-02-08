import React from 'react';

class LifeCycle extends React.Component
{
   componentWillMount()
   {
       alert("Will Mount");
   }
   componentDidMount()
   {
       alert("Did Mount");
   }
   render()
   {
       return <h1>Haii user</h1>
   }
    
}
export default LifeCycle;