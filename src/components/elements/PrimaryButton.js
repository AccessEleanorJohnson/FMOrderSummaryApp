function PrimaryButton (props) {

    const onClickHandler = (e) => {
        if(props.onClick) {
            e.preventDefault();
            props.onClick(e);
        }
    }

    const classes = 'block my-5 py-4 text-white font-bold bg-bright-blue hover:bg-bright-blue/80 rounded-xl shadow-xl shadow-bright-blue/20 focus:outline focus:outline-red-500 focus:outline-2 ' + props.className;

    return (
        <button type={props.type} className={classes} onClick={onClickHandler} >{props.children}</button>
    );
}

export default PrimaryButton;