import React from "react";
import { Link } from "react-router-dom";


export default function ButtonsChoices() {
    return (
        <div>
            <Link to="/Contemporaines">
          <button>Contemporaines</button>
        </Link>
        <Link to="/Intemporelles">
          <button>Intemporelles</button>
        </Link>
        <Link to="/Lumineuses">
          <button>Lumineuses</button>
        </Link>
        </div>
    )
}