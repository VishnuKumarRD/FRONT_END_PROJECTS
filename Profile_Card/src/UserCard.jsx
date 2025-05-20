import PropTypes from "prop-types";
const userdata=[
  {
  name:"Natasa",
  city:"California",
  description:"FrontEnd_Developer",
  skills:["UI/UX","HTML","CSS","Bootstrap","Tailwind CSS","Javascript","React JS","Angular JS"],
  online:true,
  profile:"Images/img1.jpg",
},
{
  name:"Allen",
  city:"New York",
  description:"Web Developer",
  skills:["HTML","CSS","Bootstrap","Tailwind CSS","Javascript","React JS"],
  online:true,
  profile:"Images/img2.jpg",
},
{
  name:"Jenny",
  city:"Francis",
  description:"MERN Stack Developer",
  skills:["Mongo DB","Express JS","React JS","Node JS"],
  online:false,
  profile:"Images/img3.jpg",
},
]

function User(props){
  return(
    <div className="Card_Container">
      <span className={props.online?"status online":"status offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
      <img src={props.profile} className="img" alt="User" />
      <h2>{props.name}</h2>
      <h4>{props.city}</h4>
      <p>{props.description}</p>
      <div className="btn">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {props.skills.map((skill,index)=>(
            <li key={index}>{skill}</li>
          ))}
          
        </ul>
      </div>
    </div>
  )
}
export const UserCard = () => {
  return (
    <>
    {
      userdata.map((user,index)=>(
        <User key={index} name={user.name} 
        city={user.city}
        description={user.description}
        online={user.online}
        profile={user.profile}
        skills={user.skills}/>
      ))
    }
    </>
      
  )
}

{/* <User name="Avanthika" city="Bangolore" description="FrontEnd_Developer" skills={["UI/UX","HTML","CSS","Bootstrap","Tailwind CSS","Javascript","React JS","Angular JS"]} online={true} profile="Images/img1.jpg"/> */}

User.propTypes={
  name:PropTypes.string.isRequired,
  city:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  skills:PropTypes.arrayOf(PropTypes.string).isRequired,
  online:PropTypes.bool.isRequired,
  profile:PropTypes.string.isRequired,
};