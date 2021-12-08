import React from "react";
import {Link} from'react-router-dom';

const Home=({pokemon:results})=> {
  return (
    <div className="mt-10 p-4 flex flex-wrap">
        {
            results && results.map((val,idx)=>(
                <div className="ml-4 text-2xl text-blue-400">
                    <Link to={`/about/${val.idx}`} key={idx}> {val.name}</Link>
                </div>
            ))
        }
    </div>
    
  );
};

export default Home;
