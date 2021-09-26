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
export const NameText = (props) => {
    return (
        <span className="font-normal text-xs text-skin-name">{props.text}</span>
    )
}
export const BigHeadings = (props) => {
    return (
        <h1 className="font-bold text-3xl text-skin-primary">{props.text}</h1>
    )
}
export const Heading = (props) => {
    return (
        <h1 className="font-bold text-base text-skin-primary">{props.text}</h1>
        )
    }

export const PendingText = (props) => {
    return (
        <span className="tracking-wide text-xs text-skin-pending font-semibold">Pending</span> 
    )
}
export const PaidText = (props) => {
    return (
        <span className="tracking-wide text-xs text-skin-paid font-semibold">Paid</span> 
    )
}
export const DraftText = (props) => {
    return (
        <span className="tracking-wide text-xs text-skin-draft font-semibold">Draft</span> 
    )
}