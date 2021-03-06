function Card (props) {
    const classes = 'rounded-3xl shadow-2xl shadow-desaturated-blue/50 ' + props.className;

    return (
        <div className={classes}>
            {props.children}
        </div>
    );

}

export default Card;