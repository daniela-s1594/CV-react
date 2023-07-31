import { info } from "../../Data/data";
import "./Profile.css";
export function Profile() {
    return (
        <div className='Profile'><h2>Profile</h2>
                    {info.certificate.map((val) => (
                        <>
                            <p href="">{val.date}</p>
                            <p href="">{val.description}</p>
                            <p href="">{val.institution}</p>
                            <p href="">{val.name}</p>
                            <br />
                        </>
                    ))}
        </div>



    )
}
