import { info } from "../../Data/data";
import "./Skills.css";

export function Skills() {
    return (
        <>
            <div className="skills-container">
                <div className='Skills'><h2>Skills</h2>
                            {info.skills.map((val) => (
                                <>
                                    <p href="" className='skills-name'>{val.name} {val.percentage}</p>
                                </>
                            ))}
                </div>
            </div>
        </>

    )
}

