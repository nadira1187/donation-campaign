
const Banner = () => {
    return (
        
        <div className="hero min-h-screen bg-[url('https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR1iHjVSDlr0IdVaROO5H5jLL55Nlqc7etzJl89zd14a68j7Mt8X96F19Vw')]">
        <div className="w-full h-full backdrop-opacity-100 bg-white/70 flex flex-col  justify-center items-center text-center ">

            <div className="text-center text-neutral-950 text-5xl font-bold font-['Inter'] pb-20">I Grow By Helping People In Need</div>
            <div className="">
                <div className="input-group">
                    <input type="text" placeholder="Search…" className="input input-bordered" />
                    <button className=" w-[110px] bg-red-500 rounded-lg  normal-case p-2 text-white">Search
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Banner;