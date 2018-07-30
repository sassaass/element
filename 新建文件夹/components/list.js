import React from 'react'
import urls from '../img/a.jpg'

class List extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<div>
				<div className="lei-sec">
					<div className="lei-left">
						<img src={urls} />
					</div>
					
					<div className="lei-right">
						<div className="lei-top">
							<h2>米多面多(京广路店)</h2>
							<span>···</span>
						</div>
						<div className="lei-con">
							<span>月售3539</span>
							<b><i>准时达</i>  蜂鸟专送</b>
						</div>
						<div className="lei-bottom">
							<span>起送 ￥20 | <i>配送 ￥3</i></span>
							<b><i>21分钟</i> | 472m</b>
						</div>
						<p>满25减14,满45减21,满75减35</p>
						<p>特价商品3元起</p>
						<p className="lei-foot">附近还有7家米多面多</p>
					</div>
				</div>
				
			</div>
		)
	}
	
}
export default List;