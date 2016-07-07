import React from 'react';

class App extends React.Component {
   render() {

   	var bethStyle = {
   		fontSize: 100,
   		color: '#898989'
   	}

      return (
         <div>
            <h1 style = {bethStyle}>Header</h1>
            <h2>Content</h2>
            <p>This is the content!!!</p>
         </div>
      );
   }
}

export default App;