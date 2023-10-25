import './auth.scss';
import { useState } from "react";


const Authentication = () => {
    const [action , setAction]= useState("singin");
    return (
        <>
            <div className="box-auth">
                <div className={action === "singin" ? "right singin" : "right singup"}>
                <span className="square" ></span>
                </div>
                <div className="left">
        
                    <form>
                        <div>
                            <input type='text' />
                        </div>
                        <div> 
                            <input type='password' />
                        </div>
                        <button>ورود</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Authentication;