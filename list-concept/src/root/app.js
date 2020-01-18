import React ,{Component} from 'react';

class App extends Component{
    state={
        users:[
            {id:101, name:"shilpi tyagi", roll:1234},
            {id:102, name:"sunny tyagi", roll:1346},
            {id:103, name:"Gaurav tyagi", roll:1678}
        ],
        isSelected:"true"
    }
  render(){

    // const arr1=[10,20,30,40]
    // const newArr =arr1.map((num)=>{
    //    return <li>{num}</li>
    // })


    const newUsers=this.state.users.map((user)=>{
        console.log(user);
      return <p>Id ::{user.id}     Name:: {user.name}    Roll No::: {user.roll}</p>
    })
      return(
          <React.Fragment>
            <ul>
                {/* {
                    arr1.map((num)=>{
                       return <li>{num}</li>
                    })
                } */}

               {/* {
                   arr1.map(num=>
                    (<li>{num*2}</li>)
                   )
               } */} 


               {/* {
                   arr1.map((num)=><li>{num}</li>)
               } */}
              { this.state.users.map((user)=>(
       <p>Id ::{user.id}     Name:: {user.name}    Roll No::: {user.roll}</p>
    ))}
            </ul>
          </React.Fragment>
      )
  }
};

export default App;