//主组件
import React from 'react'
import Child from './components/child.js'
import Childt from './components/childt.js'
import img1 from './image/65569960_p0.jpg'

class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
               

                <Child/>
                <Childt/>
            </div>
        )
    }
}

export default App
