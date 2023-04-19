import classes from "./Card.module.css"

const Card = props => {
    console.log(props)

    return (
        <div className={classes.card}>
            
            <div> {/* Container 1st line */}
                <div> {/* Container 1st column */}
                    <img src={props.logo} />
                    <span>
                        {props.provider}
                    </span>
                </div>
                <div>
                    <span> Plan Name </span>
                    <ul>
                        <li>Validite</li>
                        <li>Prix</li>
                        <li>Pays</li>
                    </ul>
                </div>
            </div>

            <div> {/* Container 2nd line */}
                <div>Capacity</div>
                <span>Offer</span>
            </div>
        </div>
    )
}

export default Card;