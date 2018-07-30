import React from 'react'
import img4 from '../image/ele-zwj-1.jpg'

class Nav extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div className="ele-zwj-nav">
                    <div className="ele-zwj-nav-top">  
                        推荐商家
                    </div>

                    <ul className="ele-zwj-nav-nav">
                        <li className="ele-zwj-nav-nav-sort"><a href="">综合排序</a></li>
                        <li><a href="">距离最近</a></li>
                        <li><a href="">品质联盟</a></li>
                        <li><a href="">筛选</a> <i><img src={img4}  /></i></li>
                    </ul>

                </div>

            </div>
        )
    }
}

export default Nav