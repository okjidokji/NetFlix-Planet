import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import View from './View';

const Main = () => {
    return (
        <div className='bg-[#141414]'>
            <Header/>
            <View/>
            <Footer/>

            <Link to="/detail">
    	        <button className="border-[1px] p-5 m-4 bg-white text-[#141414]">
        	        Detail
	            </button>
            </Link>
            <Link to="/my">
            	<button className="border-[1px] p-5 m-4 bg-white text-[#141414]">
					마이페이지
            	</button>
            </Link>
            <Link to="/service">
	            <button className="border-[1px] p-5 m-4 bg-white text-[#141414]">
    	            go객센터
    	        </button>
            </Link>
            <Link to="/container">
                <button className="border-[1px] p-5 m-4 bg-white text-[#141414]">
                    마이페이지안쪽
                </button>
            </Link>

        </div>
    );
};

export default Main;