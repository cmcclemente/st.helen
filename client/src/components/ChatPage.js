import React from 'react';




class ChatPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userValue: null,
        }
    }

    myFunction = () => {
        const x = document.getElementById("myText").value;
        console.log("got here");
        this.setState({userValue: x});


    }

    render(){
    const {userValue} = this.state;    
    return (
       <div>
            <div className="bodyChat">
                <h2 className="center">Chat page</h2>

                <div className= "containerChat">
                    <img src="https://cdn4.iconfinder.com/data/icons/cute-emojis/100/cute_monsters-02-512.png" alt="Avatar" />
                    <p>Hello. This is where we would have an automated message like how can I help you</p>
                    <span className="time-right">11:00</span>
                </div>

                { !!userValue && <div className="containerChat darker">
                    <img src="https://cdn1.iconfinder.com/data/icons/emoji-23/68/Avatar_cute_emoji_goofy_silly_teeth_-512.png" alt="Avatar" className="right"/>
                    <p>{userValue}</p>
                    <span className="time-left">11:08</span>
                </div>}

                <div>
                    <input type="text" id="myText" placeholder="enter a question"/>
                    <button onClick={this.myFunction}>Send</button>
                    
                   

                </div>
                    
            </div>
        </div>
    )}       
}

export default ChatPage