import React from 'react'
import img2 from '../image/16ff085900d62b8d60fa7e9c6b65dpng.webp'
import img3 from '../image/0fa0ed514c093a7138b0b9a50d61fpng.webp'

class Banner extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div className="ele-zwj-banner">
                    <div>
                        <h3>品质套餐</h3>
                        <div className="ele-zwj-banner-tit">搭配齐全吃得好</div>
                        <div className="ele-zwj-banner-buy">立即抢购&gt;</div>
                        <img src={img2}  />
                    </div>
                    <div>
                            <h3 style={{"color":"red"}}>限量抢购</h3>
                            <div className="ele-zwj-banner-tit">超值美味9.9元起</div>
                            <div className="ele-zwj-banner-buy " style={{"color": "#000"}}>
                                <span style={{"color":"red"}}>2671人</span>正在抢&gt;
                            </div>
                            <img src={img3}  />
                            
                    </div>
                </div>

            </div>
        )
    }
}

export default Banner