import React from 'react';
import './home.css';

function Homepage(){
    return (
        <div>
            <div className='container'>
                <div className='mainbox'></div>
            </div>

            <div className='ep'>Explore Product</div>
            <div className='flex-container'>
                <div className='flex-box'></div>
                <div className='flex-box'></div>
                <div className='flex-box'></div>
                <div className='flex-box'></div>
                <div className='flex-box'></div>
            </div>
            <div className='line'></div>
            <div className='flex-container1'>
                <div className='flex-box1'><div className='hi'><button><img src='./heart.png' /></button></div></div>
                <div className='flex-box1'><div className='hi'><button><img src='./heart.png' /></button></div></div>
                <div className='flex-box1'><div className='hi'><button><img src='./heart.png' /></button></div></div>
                <div className='flex-box1'><div className='hi'><button><img src='./heart.png' /></button></div></div>
            </div>
            <div className='td'>Top Deals</div>
            <div className='ar'><img src='./arrow.png' /></div>
            <div className='flex-container2'>
                <div className='flex-box2'><div className='hi'><button><img src='./heart.png' /></button></div></div>
                <div className='flex-box2'><div className='hi'><button><img src='./heart.png' /></button></div></div>
                <div className='flex-box2'><div className='hi'><button><img src='./heart.png' /></button></div></div>
                <div className='flex-box2'><div className='hi'><button><img src='./heart.png' /></button></div></div>
            </div>
            <div className='td'>Suggest for you</div>
            <div className='ar'><img src='./arrow.png' /></div>
            <div className='flex-container3'>
                <div className='flex-box3'><div className='hi'><button><img src='./heart.png' /></button></div></div>
                <div className='flex-box3'><div className='hi'><button><img src='./heart.png' /></button></div></div>
                <div className='flex-box3'><div className='hi'><button><img src='./heart.png' /></button></div></div>
                <div className='flex-box3'><div className='hi'><button><img src='./heart.png' /></button></div></div>
            </div>
            <div className='td'>Recently Viewed</div>
             <div className='ar'><img src='./arrow.png' /></div>
            <div className='flex-container4'>
                <div className='flex-box4'><div className='hi'><button><img src='./heart.png' /></button></div></div>
                <div className='flex-box4'><div className='hi'><button><img src='./heart.png' /></button></div></div>
                <div className='flex-box4'><div className='hi'><button><img src='./heart.png' /></button></div></div>
                <div className='flex-box4'><div className='hi'><button><img src='./heart.png' /></button></div></div>
            </div>
            
        </div>
    );
}
export default Homepage;