import { info } from "../../Data/data";
import "./Interest.css";

export function Interest() {
    return (
        <>
            <div className="Interest-container">
                <div className="Interest"><h2>Interest</h2>
                    <nav>
                        <ul>
                            <>
                               {info.interest.map((val) =>  (
                                    <>
                                        {val}
                                        <br />
                                    </>
                                ))}
                            </>
                        </ul>
                    </nav>
                </div>
            </div>
        </>

    )
}