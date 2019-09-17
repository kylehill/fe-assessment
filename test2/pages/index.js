import RoomMultiSelector from "../components/RoomMultiSelector"

const Index = (props) => {
    return (
        <>
            <RoomMultiSelector 
                rooms={4} />
            <style jsx global>{`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    text-rendering: optimizeLegibility;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                }
            `}</style>
        </>
    )
}

export default Index