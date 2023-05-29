import "./assignment1.css"
export default function Article(props){
    return(
        <div className="article-container">
            <div className="card">
                <img src={props.imgsrc}/>
                <p>
                {props.content}
                </p>
                </div> 
                <button className="btn">READ MORE</button> <br /><br /><br />
        </div>
    )
}
