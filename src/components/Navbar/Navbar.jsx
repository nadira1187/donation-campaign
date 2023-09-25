import { NavLink } from "react-router-dom";



const links=<>
<NavLink to="/">Home</NavLink>
<NavLink to="/donation">Donation</NavLink>
<NavLink to="/statistics">Statistics</NavLink>

</>
const Navbar = () => {
    return (
        <div className="">
            <div className="flex justify-between items-center font-[Inter] px-10 py-10">
                <div className="flex flex-row">
                    <div><img src="https://i.ibb.co/rH8kxRw/Logo.png" alt="" /></div>
                </div>
                <div className="flex gap-4">
                    {links}
                </div>
            </div>

        </div>
    );
};

export default Navbar;