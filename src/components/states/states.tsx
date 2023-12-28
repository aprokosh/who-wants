import { BurnoutIcon, FollowersIcon, MoneyIcon } from "../images";

export function States ({ money, followers, burnout }: { money: number, followers: number, burnout: number }) {
    return (
        <div>
            <div className="stateItem"><MoneyIcon/> {money}</div>
            <div className="stateItem"><FollowersIcon/> {followers}</div>
            <div className="stateItem"><BurnoutIcon/> {burnout}</div>
        </div>
    )

}