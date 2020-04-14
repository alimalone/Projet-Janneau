import React from "react";
import { Link } from "react-router-dom";


export default function NavBar() {
    return (
      <div>
       
        <Link to="/">
            <button>Contemporaines</button>
          </Link>
          <Link to="/intemporelles">
            <button>Intemporelles</button>
          </Link>
          <Link to="/lumineuses">
            <button>Lumineuses</button>
          </Link>
  
         
        </div>
        
        
      
    );
  }
  