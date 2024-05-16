import React, { Children, ReactNode } from "react"

interface SigninAndSignupTemplateProps {
    children: ReactNode;
  }

const SigninAndSignupTemplate: React.FC<SigninAndSignupTemplateProps> = ({children}) => {
  return (
    <>
        <div className="relative h-screen w-screen" style={{backgroundImage: 'url("https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/modelBackground.e047cd82.svg")'}}>
            <div className="absolute rounded-[12px] top-14 lg:top-1/2 left-1/2 -translate-x-1/2 lg:-translate-y-1/2 overflow-hidden">
                <div className="flex flex-row relative">
                    <div className="w-max hidden lg:block">
                        <img className="h-[475px] w-[450px] overflow-clip" style={{aspectRatio: "auto 450/475", overflowClipMargin: "content-box"}} src="//assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/patternImg.f93bd17c.svg"/>
                        <div className="absolute top-[58px] left-[40px] text-white" style={{fontWeight: "535", fontSize: "2rem"}}>
                            <div>Simple, Free</div>
                            <div>Watchlist</div>
                            <div className="h-2 w-[91px] mt-[222px] ml-[1px] bg-white" style={{animation: "lls-login-width-animation 2.5s ease-in-out infinite"}}></div>
                            <div>Stocks</div>
                        </div>
                    </div>
                    <div className="w-[80vw] max-w-[500px] lg:w-[450px] -ml-[2px] bg-white py-[25px] px-[60px]">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SigninAndSignupTemplate