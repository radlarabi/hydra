
export default function JoinForm(){
    return (
        <div className="  flex flex-col justify-center pt-[10vh]">
            <div className="mx-[4vw] lg:mx-[10vw] bg-gray-800 rounded-[50px] lg:rounded-[100px] bg-gradient-to-r from-purple-card via-custom-radial1 to-purple-card">
                <div className="pt-[2rem] title flex flex-col items-center justify-center">
                    <p className="text-slate-200 text-[1.5rem] lg:text-[36px] p-[1vw] pb-[1rem]">
                        JOIN HYDRA
                    </p>
                    <div className="bg-slate-200 h-[1px] lg:w-[10vw] w-[40vw]" />
                    <p className="text-slate-200 text-[1.5rem] lg:text-[36px] lg:mx-[0px] mx-[1rem] p-[1vw] py-[1rem]">
                        Let’s Build Your VR Experience
                    </p>
                </div>
                <form action="">
                    <div className="form m-[1rem]">
                        <div className="flex flex-col lg:flex-row justify-center items-center">
                            <input className="h-[7vh] rounded-3xl bg-transparent text-white my-[10px] w-full border-white border-[1px] indent-4 lg:mr-3" placeholder="First Name" type="text" />
                            <input className="h-[7vh] rounded-3xl bg-transparent text-white my-[10px] w-full border-white border-[1px] indent-4 lg:ml-3" placeholder="Last Name" type="text" />
                        </div>
                        <div className="flex flex-col lg:flex-row justify-center items-center">
                            <input className="h-[7vh] rounded-3xl bg-transparent text-white my-[10px] w-full border-white border-[1px] indent-4 lg:mr-3" placeholder="Email" type="email" />
                            <input className="h-[7vh] rounded-3xl bg-transparent text-white my-[10px] w-full border-white border-[1px] indent-4 lg:ml-3" placeholder="Phone Number" type="text" />
                        </div>
                        <div className="flex flex-col lg:flex-row justify-center items-center">
                            <input className="h-[7vh]  rounded-3xl bg-transparent text-white my-[10px] w-full  border-white border-[1px] indent-4" placeholder="Subject" type="text" />
                        </div>
                        <div className="flex justify-center items-center">
                            <textarea className="h-[7vh]  min-h-[20vh] rounded-3xl bg-transparent text-white my-[10px] w-full  border-white border-[1px] indent-4 placeholder:pt-5 " placeholder="Tell Us Something...">

                            </textarea>
                        </div>
                        <div className="flex justify-center items-center pt-[4vh]">
                            <button className="submit ml-[5vw] tracking-wider text-gray-800 text-[12px] font-nav font-semibold p-4 bg-gradient-to-r from-purple-400 to-custom-purple rounded-3xl lg:pl-10 lg:pr-10 pr-[6vw] pl-[6vw]">
                                SEND TO HYDRA
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}