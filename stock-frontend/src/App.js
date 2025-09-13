import React, { useState } from "react";

function App() {
  const [ticker, setTicker] = useState("AAPL");
  const [data, setData] = useState(null);

  const fetchStock = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/stock/${ticker}`);
    const json = await res.json();
    setData(json);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Stock Dashboard</h1>
      <input value={ticker} onChange={(e) => setTicker(e.target.value)} />
      <button onClick={fetchStock}>Fetch</button>
      {data && (
        <p>
          {data.ticker}: {data.price} (at {data.time})
        </p>
      )}
    </div>
  );
}

export default App;

// Original
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
