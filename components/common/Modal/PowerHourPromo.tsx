import { PowerHourPromoI } from '@/interfaces'
import { CopyButton } from '@/components/common'

const PowerHourPromo = ({
    inviteToken
}: PowerHourPromoI) => {

    return(
        <div className="pt-5">
            <div className="text-xl font-semiBold">Share this link with everyone you would like to invite:</div>
            <CopyButton text={inviteToken} />
        </div>
    )
}

export default PowerHourPromo