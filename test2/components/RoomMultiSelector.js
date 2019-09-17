import MultiSelectRoom from "./MultiSelectRoom"
import RoomMultiSelectContext from "../contexts/RoomMultiSelectContext"

class RoomMultiSelector extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            rooms: Array.from(
                { length: props.rooms },
                (_, idx) => ({
                    enabled: (idx === 0),
                    adults: 1,
                    children: 0
                })
            )
        }
    }

    toggleRoom = (number, isEnabled) => {
        this.setState({
            rooms: this.state.rooms.map((room, idx) => {
                if (isEnabled === true) {
                    if (idx <= number) {
                        return { 
                            ...room, 
                            enabled: true 
                        }
                    }
                    else {
                        return {
                            enabled: false,
                            adults: 1,
                            children: 0
                        }
                    }
                }
                
                if (idx >= number) {
                    return {
                        enabled: false,
                        adults: 1,
                        children: 0
                    }
                }

                return room
            })
        })
    }

    changeOccupants = (number, adults, children) => {
        this.setState({
            rooms: this.state.rooms.map((room, idx) => {
                if (idx === number) {
                    return {
                        ...room,
                        adults,
                        children
                    }
                }

                return room
            })
        })
    }

    saveToLocalStorage = () => {
        localStorage.setItem("RoomMultiSelector", JSON.stringify(this.state.rooms))
    }

    componentDidMount() {
        const lsValue = localStorage.getItem("RoomMultiSelector")
        if (lsValue !== null) {
            return this.setState({
                loading: false,
                rooms: JSON.parse(lsValue)
            })
        }

        this.setState({
            loading: false
        })
    }

    render() {
        if (this.state.loading === true) {
            return null
        }

        return (
            <RoomMultiSelectContext.Provider value={{
                rooms: this.state.rooms,
                toggleRoom: this.toggleRoom,
                changeOccupants: this.changeOccupants
            }}>
                <>
                    <ul className="multiselect-list">
                        {this.state.rooms.map((room, idx) => {
                            return (
                                <MultiSelectRoom key={idx} number={idx} />
                            )
                        })}
                    </ul>
                    <button className="multiselect-button"
                        onClick={this.saveToLocalStorage}>
                        Submit
                    </button>
                    <style jsx>{`
                        .multiselect-list {
                            margin: 20px;
                            font-size: 12px;
                            font-family: Arial, sans-serif;
                        }

                        .multiselect-button {
                            margin-left: 20px;
                            font-size: 16px;
                            padding: 10px;
                            background: #C0C0C0;
                            border-bottom: solid 1px #515151;
                            border-right: solid 1px #515151;
                            cursor: pointer;
                        }
                    `}</style>
                </>
            </RoomMultiSelectContext.Provider>
        )
    }
}

RoomMultiSelector.defaultProps = {
    rooms: 1
}

export default RoomMultiSelector