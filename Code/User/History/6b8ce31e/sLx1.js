import { useState } from 'react';

class Comment extends React.Component{
    constructor(props){
        this.title = props.title;
        const [likes, setLikes] = useState(props.likes)
    }

    render(){
        
    }
}

