import React from "react"
import { captilizeFirstLetter } from "../../utilities/string";

const getCurrentLockState = (deviceName, locks) => {
    const lock = locks[deviceName];    
    return lock[lock.length - 1].state === "locked" ? "unlock" : "lock";
}

const getDeviceNameParts = deviceName => deviceName.split("-") 

const Lock = props => {
    const deviceNameParts = getDeviceNameParts(props.match.params.deviceName);
    console.log(props.locks)
    return (    
        <div>
            <h3>{`${captilizeFirstLetter(deviceNameParts[0])} ${deviceNameParts[1]} ${captilizeFirstLetter(deviceNameParts[2])}`}
            </h3>
            <div>
                <button type="button" onClick={() => props.onLockClick(props.match.params.deviceName)}>
                {getCurrentLockState(props.match.params.deviceName, props.locks)}
                </button>
            </div>      
        </div>
    )
}

export default Lock