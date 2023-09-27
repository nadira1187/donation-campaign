import { NavLink } from "react-router-dom";



const links=<>
<NavLink to="/"  className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ?
                                    "text-[#FF444A] font-bold underline" : ""
                            }>Home</NavLink>
<NavLink to="/donation" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ?
                                    "text-[#FF444A] font-bold underline" : ""
                            }>Donation</NavLink>
<NavLink to="/statistics" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ?
                                    "text-[#FF444A] font-bold underline" : ""
                            }>Statistics</NavLink>

</>
const Navbar = () => {
    return (
        <div className="">
            <div className="flex flex-col lg:flex-row md:flex-row gap-4 justify-between items-center font-[Inter] px-10 py-10">
                <div className="flex flex-row">
                    <div><img src="https://i.ibb.co/rH8kxRw/Logo.png" alt="" /></div>
                </div>
                <div className="flex  gap-5">
                    {links}
                </div>
            </div>

        </div>
    );
};

export default Navbar;