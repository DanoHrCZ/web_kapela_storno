import "./Desc.css"

const Desc = (props) =>{
    return <section>
        <img src={props.image} alt="" />
        <div className="text">
        <h2>{props.title}</h2>
        <h3>{props.type}</h3>
        <p>{props.desc}</p>
        <p>{props.date}</p>
        </div>
    </section>

}

export default Desc