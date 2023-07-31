import { info } from "../../Data/data";
import "./Languages.css"
export function Languages() {
    return (
        <div className='languages'><h2>Languages</h2>
                    <>
                        {info.languages.map((val, index) => (
                            <>
                                <p href="">{val.name}</p>
                                <p href="">{val.percentage}</p>
                                <br />
                            </>
                        ))}
                    </>
        </div>
    )
}