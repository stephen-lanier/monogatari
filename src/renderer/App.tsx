import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import React from 'react';

function Hello() {
    const [ans, setAns] = React.useState('');
    return (
        <>
            <div className='Title'>
            <h1>休</h1>
            </div>
            <div className='Answer'>
                <form method='post'>
                    <label>
                        Ans: <input name='ans' value={ans} onChange={e => {setAns(e.target.value); console.log(e.target.value)}}/>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
  );
}

// function Hello() {
//     return (
//         <div className="Hello">
//             <img width="200" alt="icon" src={icon} />
//         </div>
//         <div className="Hello">
//             <a
//             href="https://electron-react-boilerplate.js.org/"
//             target="_blank"
//             rel="noreferrer"
//             >
//             <button type="button">
//                 <span role="img" aria-label="books">
//                 📚
//                 </span>
//                 Read our docs
//             </button>
//             </a>
//             <a
//             href="https://github.com/sponsors/electron-react-boilerplate"
//             target="_blank"
//             rel="noreferrer"
//             >
//             <button type="button">
//                 <span role="img" aria-label="folded hands">
//                 🙏
//                 </span>
//                 Donate
//             </button>
//             </a>
//         </div>
//       );
// }
      

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
