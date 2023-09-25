
const Banner = () => {
    return (
        
        <div className="hero min-h-screen bg-[url('https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR1iHjVSDlr0IdVaROO5H5jLL55Nlqc7etzJl89zd14a68j7Mt8X96F19Vw')]">
        <div className="w-full h-full backdrop-opacity-100 bg-white/70 flex flex-col  justify-center items-center text-center ">

            <div className="text-center text-neutral-950 text-5xl font-bold font-['Inter'] pb-20">I Grow By Helping People In Need</div>
            <div className="form-control">
                <div className="input-group">
                    <input type="text" placeholder="Search…" className="input input-bordered" />
                    <button className="btn bg-red-500 btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 36 36" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Banner;