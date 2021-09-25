export const SecondaryText = (props) => {
    return (
        <span className="font-normal text-xs text-skin-secondary">{props.text}</span>
    )
}

export const SecondaryBold = (props) => {
    return (
        <span className="tracking-wide text-xs text-skin-primary font-semibold">{props.text}</span> 
    )
}
export const BigHeadings = (props) => {
    return (
        <h1 className="font-bold text-3xl text-skin-primary">{props.text}</h1>
    )
}
export const Heading = (props) => {
    return (
        <h1 className="font-bold text-2xl text-skin-primary">{props.text}</h1>
    )
}