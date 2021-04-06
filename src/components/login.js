import React from 'react';


class Login extends React.Component{
 
constructor(props){
    super(props);
    this.state={
        username:"",
        password:""
    }
}

login= (e)=>{
    e.preventDefault();
    // if(this.state.username==="sesha" && this.state.password==="sai"){
    //     alert("login susses");
    // }else{ 
    //     alert("password not correct");
    // }
    // api ni call cehyalante fetech methods undi inka axious ane pakes untai vatini instal ceysi cheyachu but see api
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>console.log(res))
    .then(res=>res.json())
    .then(result=> {
        console.log(result)
      if(result.filter(user=>user.username === this.state.username).length>0){
          alert("login suscess");
      }else{
          alert("logi fail");
      }
    });
}

setusername=(username)=>{
    this.setState({username:username})
   }

setpasword=(password)=>{
 this.setState({password:password})
}


    render(){

    return ( <div style={{textAlign:"center"}}> 
    <form onSubmit={this.login}>
        <input type="text" onChange={(e)=>this.setusername(e.target.value)}  value={this.state.username}  placeholder="username" /> 
        <br/>
        <input type="password"  onChange={(e)=>this.setpasword(e.target.value)}  value={this.state.password} placeholder=" password" /> 
        <br/>
        <input type="submit" value="click" />
        </form>
           </div> );

   }
}

export default Login;