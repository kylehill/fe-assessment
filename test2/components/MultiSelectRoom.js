import RoomMultiSelectContext from "../contexts/RoomMultiSelectContext"

const Dropdown = (props) => {
    return (
        <>
            <div className="room-dropdown">
                <div className="room-dropdown-title">
                    {props.title}
                </div>
                <select disabled={!(props.enabled)} onChange={props.handleChange} 
                    value={props.value}>
                    {props.options.map((opt) => {
                        return <option key={opt} value={opt}>{opt}</option>
                    })}
                </select>
            </div>
            <style jsx>{`
                .room-dropdown {
                    display: inline-block;
                    width: 50px;
                    margin: 10px 5px;
                }

                .room-dropdown select {
                    margin-top: 5px;
                }
            `}</style>
        </>
    )
}

const MultiSelectRoom = (props) => {
    return (
        <RoomMultiSelectContext.Consumer>
            {(context) => {
                const room = context.rooms[props.number]

                return (
                    <>
                        <li className={`room ${room.enabled ? "" : "room-disabled"}`}>
                            <header>
                                {props.number > 0 && (
                                    <input type="checkbox" 
                                        checked={room.enabled}
                                        onChange={(e) => {
                                            context.toggleRoom(props.number, e.target.checked)
                                        }} />
                                )}
                                Room {props.number + 1}<br/>
                            </header>
                            <section>
                                <Dropdown title="Adults (18+)" 
                                    value={room.adults}
                                    options={[1, 2]}
                                    enabled={room.enabled}
                                    handleChange={(e) => {
                                        context.changeOccupants(props.number, e.target.value, room.children)
                                    }} />
                                <Dropdown title="Children (0-17)" 
                                    value={room.children}
                                    options={[0, 1, 2]}
                                    enabled={room.enabled}
                                    handleChange={(e) => {
                                        context.changeOccupants(props.number, room.adults, e.target.value)
                                    }} />
                            </section>
                        </li>
                        <style jsx>{`
                            .room {
                                width: 125px;
                                display: inline-block;
                                border: solid 2px #E7E7E7;
                                margin-right: 20px;
                                border-radius: 5px;
                            }

                            .room.room-disabled {
                                border: solid 2px #CBCFDA;
                                background: #DBDBE3;
                            }

                            .room header {
                                background: #E7E7E7;
                                padding: 5px;
                                font-weight: bold;
                            }

                            .room.room-disabled header {
                                background: #DBDBE3;
                            }

                            .room header input {
                                margin-right: 5px;
                            }
                        `}</style>
                    </>
                )
            }}
        </RoomMultiSelectContext.Consumer>
    )
}

MultiSelectRoom.defaultProps = {
    number: 0
}

export default MultiSelectRoom