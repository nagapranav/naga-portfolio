import Loader from "react-js-loader";
function MainLoader()
{
    return(<div className="App">
    
    <div>
        <div className="loader">
            <Loader type="bubble-loop" bgColor={"#FFFFFF"}  color={'#FFFFFF'} size={100} />
        </div>
    </div>
</div>)
}
export default MainLoader;