
export default function JoinForm(){
    return (
        <div className="  flex flex-col justify-center pt-[10vh]">
            <div className="ml-[10vw] mr-[10vw]  bg-gray-800 rounded-[100px] bg-gradient-to-r from-purple-card via-custom-radial1 to-purple-card">
                <div className="title w-full flex flex-col items-center justify-center">
                    <p className="text-slate-200 text-[36px] p-[1vw]">
                        JOIN HYDRA
                    </p>
                    <div className="bg-slate-200 h-[1px] w-[10vw]"></div>
                    <p className="text-slate-200 text-[36px] p-[1vw]">
                        Let’s Build Your VR Experience
                    </p>
                </div>
                <form action="">
                    <div className="form w-full">
                        <div className="flex justify-center items-center pb-4 ">
                            <input className="h-[7vh] mr-[1vw] w-[30vw] rounded-3xl bg-transparent text-white  border-white border-[1px] pl-5" placeholder="First Name" type="text" />
                            <input className="h-[7vh] w-[30vw] rounded-3xl bg-transparent text-white  border-white border-[1px] pl-5" placeholder="Last Name" type="text" />
                        </div>
                        <div className="flex justify-center items-center p-4">
                            <input className="h-[7vh] mr-[1vw] w-[30vw] rounded-3xl bg-transparent text-white  border-white border-[1px] pl-5" placeholder="Email" type="email" />
                            <input className="h-[7vh] w-[30vw] rounded-3xl bg-transparent text-white  border-white border-[1px] pl-5" placeholder="Phone Number" type="text" />
                        </div>
                        <div className="flex justify-center items-center pb-4">
                            <input className="h-[7vh] w-[61vw] rounded-3xl bg-transparent text-white  border-white border-[1px] pl-5" placeholder="Subject" type="text" />
                        </div>
                        <div className="flex justify-center items-center pb-4">
                            <textarea className="h-[7vh] w-[61vw] min-h-[20vh] rounded-3xl bg-transparent text-white  border-white border-[1px] pl-5 placeholder:pt-5 " placeholder="Tell Us Something...">

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