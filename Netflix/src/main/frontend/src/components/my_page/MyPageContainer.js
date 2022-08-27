import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import membershipImg from '../../image/my_page/membershipImg.png';
import slideDownButton from '../../image/my_page/slideDownButton.png';
import slideUpButton from '../../image/my_page/slideUpButton.png';
import MyPageSlide_Sub from './MyPageSlide_Sub';
import save from '../../image/my_page/save.png';
import MypageFooter from './MyPageFooter';
import useStore from 'store';

const MypageContainer = () => {
    const {valEmail , valPhone} = useStore();
    const [isShow1, setIsShow1] = useState(false)
    const [isShow2, setIsShow2] = useState(false)
    const [isShow3, setIsShow3] = useState(false)
    const [isShow4, setIsShow4] = useState(false)

    const onToggle1 = () => {
        setIsShow1(!isShow1)
    }
    const onToggle2 = () => {
        setIsShow2(!isShow2)
    }
    const onToggle3 = () => {
        setIsShow3(!isShow3)
    }
    const onToggle4 = () => {
        setIsShow4(!isShow4)
    }

    return (
        <div className = "m2_container">
                <div className="px-32 py-36 w-full min-h-[1000px] max-w-[1248px] mx-auto">
                    <div className = "flex">
                        <h1 className="w-[10%] text-5xl justify-start pr-4 ">계정</h1>
                        <img className="mt-5 justify-start w-[35px] h-[40px]" src={ membershipImg }/>
                        <h3 className="mt-8 ml-3 text-zinc-600 font-bold text-lg">멤버십 시작 : 2022년 8월</h3>
                    </div>

                    <div className = "flex w-[100%] pt-7 pb-4 pl-5 rounded-md bg-green-500 z-0">
                        <img src = { save } className = "w-[45px]"></img>
                        <div className = " w-[100%] pt-1 text-xl">프로필 이메일이 변경되었습니다.</div>
                    </div>

                    <div className="w-full pb-20">
                        <div className="border-solid mt-9 border-t-[1px] h-9 border-zinc-700 w-full">
                            <div className="flex justify-start w-full">
                                <div className="m2_account_right z-[2] pr-[60px] left-0">
                                    <div className="text-zinc-500 text-xl pb-5 pt-5 z-0">멤버십 & 결제정보</div>
                                    <div><button className=" float-none w-56 pt-4 pb-4 rounded-md bg-gray-300 z-0">멤버십 해지</button></div>
                                </div>
                                <div className='w-full mb-7'>
                                    <div className="flex justify-between w-full">
                                        <div className="pt-6 font-bold">{localStorage.getItem('user_email')}</div>
                                        <button>
                                            <Link to='mfa' onClick={valEmail}><div className="pt-6 pl-90 text-end text-blue-500">이메일 변경</div></Link>
                                        </button>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="pt-5 text-neutral-500">비밀번호 : ****************</div>
                                        <button>
                                            <Link to='changePwd'><div className="pl-90 pt-5 text-end text-blue-500">비밀번호 변경</div></Link>
                                        </button>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="pt-5 text-neutral-500">전화번호 : {localStorage.getItem('phone')}</div>
                                        <button>
                                            <Link to='mfa' onClick={valPhone}><div className="pl-90 pt-5 text-end text-blue-500">휴대폰 번호 변경</div></Link>
                                        </button>
                                    </div>
                                    <div className="border-solid mt-6 border-t-[1px] h-3 border-neutral-200"></div>
                                    <div className="flex justify-between">
                                        <div>
                                            <img className="pt-2 w-7 float-left" src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/icon_kakaopay_2x.png" />
                                            <div className="pt-4 pl-10 font-bold ">jeoooo97@naver.com</div>
                                        </div>
                                        <button>
                                            <Link to='/payment/paymentInfo'><div className="pl-90 pt-5 text-end text-blue-500">결제 정보 관리</div></Link>
                                        </button>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="pt-5">다음 결제일은 2022년 9월 1일입니다.</div>
                                        <button>
                                            <Link to='/payment/paymentPick'><div className="pl-90 pt-5 text-end text-blue-500">예비 결제 수단 등록</div></Link>
                                        </button>
                                    </div>
                                    <div className="flex justify-end">
                                        <div className="pl-90 pt-5 text-end text-blue-500">결제 상세 정보</div>
                                    </div>
                                    <div className="flex justify-end">
                                        <button>
                                            <div className="pl-90 pt-5 text-end text-blue-500">결제일 변경</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="border-solid mt-5 border-t-[1px] h-2 border-zinc-700"></div>

                            <div className="flex justify-start w-full mb-4">

                                <div className="text-zinc-500 text-xl pb-5 pt-5">멤버십 상세정보</div>
                                <div className="pt-6 ml-[19%] font-bold">베이식</div>
                                <button>
                                    <Link to='changePlan'><div className="ml-[523px] text-blue-500">멤버십 변경</div></Link>
                                </button>

                            </div>

                            <div className="border-solid pb-10 border-t-[1px] h-2 border-zinc-700"></div>

                            <div className='m2_user_profile flex justify-between w-full'>
                                <div className=" text-zinc-500 text-xl pb-5 w-[270px]">프로필 & 자녀 보호 설정</div>
                                    <div className = "w-[80%] m2_user">
                                        <div className="flex flex-wrap ml-[10%] w-[100%]">
                                            <img
                                                className="w-14 rounded-md"
                                                src="https://occ-0-2219-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABR2_CnwLC_fGf1EGaAxpU3cAzAwjj4q3yVg_n99iZREET5eSWAZ_B0kemHB5GOEPXtk7ekGULELzDrWZk4WCAULubeSwxTg_UQ.png?r=229"
                                            />

                                            <div className="pt-3 pl-5">
                                                <h3 className="font-bold pb-2">박어른</h3>
                                                <div className="text-gray-600 text-xs">모든 관람등급</div>
                                            </div>
                                            <button className="ml-[68%] flex justify-end" onClick = { onToggle1 }>
                                                {isShow1 ? <img src={slideUpButton} className=" w-8 h-7"/> : <img src={slideDownButton} className="w-8 h-7" />}
                                            </button>
                                        </div>

                                        <div className="border-solid ml-[65px] mt-6 border-t-[1px] h-9 border-neutral-300"></div>
                                        { isShow1? <MyPageSlide_Sub/>: ''}

                                        <div className="flex flex-wrap ml-[10%] w-[100%]">
                                            <img
                                                className="w-14 rounded-md"
                                                src="https://occ-0-325-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABULvkIoX3Lsmb1j9ZGivfBory3qQ5p32A0lWmVmbGm2v2zJdJTNE3XCnqRbKOXhjcJsQijTuPlPo5QDZXjto885KBMbGWkheqg.png?r=1d4"
                                            />
                                            <div className="pt-3 pl-5">
                                                <h3 className="font-bold pb-2">이어른</h3>
                                                <div className="text-gray-600 text-xs">모든 관람등급</div>
                                            </div>
                                            <button className="ml-[68%]" onClick = { onToggle2 }>
                                                {isShow2 ? <img src={slideUpButton} className= "w-8 h-7" /> : <img src={slideDownButton} className="w-8 h-7" />}
                                            </button>
                                        </div>
                                        <div className="border-solid ml-[65px] mt-6 border-t-[1px] h-9 border-neutral-300"></div>
                                        { isShow2 ? <MyPageSlide_Sub/> : ''}
                                        <div className="flex flex-wrap ml-[10%]  w-[100%]">
                                            <img
                                                className="w-14 rounded-md"
                                                src="https://occ-0-325-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZgyZnNWMWbC0ToPJh3fckR_pd-zegBVlQ4CexqZz1pg6MzPqliR7LNySvHgpmKWgiIXzKKk7AyXS_A58rPBfItSuWoPMgBVaQ.png?r=bd7"
                                            />
                                            <div className="pt-3 pl-5 ">
                                                <h3 className="font-bold pb-2">김어른</h3>
                                                <div className="text-gray-600 text-xs">모든 관람등급</div>
                                            </div>
                                            <button className="ml-[68%]" onClick = { onToggle3 }>
                                                { isShow3 ? <img src={  slideUpButton } className="w-8 h-7" /> :<img src= { slideDownButton } className="w-8 h-7" />}
                                            </button>
                                        </div>

                                    <div className="border-solid ml-[65px] mt-6 border-t-[1px] h-9 border-neutral-300"></div>
                                    { isShow3 ? <MyPageSlide_Sub/> : ''}

                                    <div className="flex flex-wrap ml-[10%] w-[100%]">
                                            <img
                                                className="w-14 rounded-md"
                                                src="https://occ-0-325-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWG8kTfZ7jmDE0Q7j3amzJqHSu8-xZtnJ6JBhMqFIWA9GBXI8rVc-25IaVNxHfGAKx29HifG2wwygT7ogbGM9KShYBKyOGrYDg.png?r=11f"
                                            />
                                        <div className="pt-3 pl-5 ">
                                            <h3 className="font-bold pb-2">키즈당</h3>
                                            <div className="text-gray-600 text-xs">12+ 등급 이하</div>
                                        </div>
                                        <button className="ml-[68%] relative " onClick = { onToggle4 }>
                                            { isShow4 ? <img src={  slideUpButton } className="w-8 h-7" /> :<img src= { slideDownButton } className="w-8 h-7" />}
                                        </button>
                                    </div>

                                    <div className="border-solid ml-[65px] mt-6 border-t-[1px] h-9 border-neutral-300"></div>
                                    { isShow4 ? <MyPageSlide_Sub/> : '' }
                                </div>
                            </div>
                        <MypageFooter/>
                        </div>
                    </div>
                </div>
            </div> //container
    );
};

export default MypageContainer;
