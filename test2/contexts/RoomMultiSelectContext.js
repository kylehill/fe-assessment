import React from "react"

const RoomMultiSelectContext = React.createContext({
    rooms: [],
    toggleRoom: () => {},
    changeOccupants: () => {}
})

export default RoomMultiSelectContext