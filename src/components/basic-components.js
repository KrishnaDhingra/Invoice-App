import Arrow from '../assets/right-arrow.png'

export const SecondaryText = (props) => {
    return (
        <span className="font-normal text-xs text-skin-secondary">{props.text}</span>
    )
}

export const SecondaryBold = (props) => {
    return (
        <span className="tracking-wide text-xs text-skin-primary font-bold">{props.text}</span> 
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
export const SmallHeading = (props) => {
    return (
        <h1 className="font-bold text-sm text-skin-primary">{props.text}</h1>
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
export const PendingBox = () => {
    return (
        <div className="ml-4 w-24 pending-box rounded py-2 px-4 text-center bg-skin-pendingBg"><PendingText/></div>
    )
}
export const PaidBox = () => {
    return (
        <div className="ml-4 w-24 paid-box rounded py-2 px-4 text-center bg-skin-paidBg"><PaidText/></div>
    )
}
export const DraftBox = () => {
    return (
        <div className="ml-4 w-24 draft-box rounded py-2 px-4 text-center bg-skin-draftBg"><DraftText/></div>
    )
}
export const RightArrow = () => {
    return (
        <img src={Arrow} alt="" className="h-2 w-2 transform -rotate-90" />
    )
}
export const LeftArrow = () => {
    return (
        <img src={Arrow} alt="" className="h-2 w-2 transform rotate-90" />
    )
}