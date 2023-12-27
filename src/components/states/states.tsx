import { BurnoutIcon, FollowersIcon, MoneyIcon } from "../images";

export function States ({ money, followers, burnout }: { money: number, followers: number, burnout: number }) {
    return (
        <div>
            <span><MoneyIcon/> {money}</span>
            <span><FollowersIcon/> {followers}</span>
            <span><BurnoutIcon/> {burnout}</span>
        </div>
    )

}