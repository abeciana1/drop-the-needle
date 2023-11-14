import { PowerHourPromoI } from '@/interfaces'
import { CopyButton } from '@/components/common'

const PowerHourPromo = ({
    inviteToken,
    listenLink
}: PowerHourPromoI) => {

    return(
        <div className="pt-5">
            <div className="text-xl font-semiBold">Share this link with everyone you would like to invite:</div>
            <CopyButton text={inviteToken} />
            <div className="text-xl font-semiBold">Here&apos;s the link to share on the day of the event:</div>
            <CopyButton text={listenLink} />
        </div>
    )
}

export default PowerHourPromo