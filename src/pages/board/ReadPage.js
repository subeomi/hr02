import { useParams } from "react-router-dom";
import ReadComponent from "../../component/board/ReadComponent";

const ReadPage = () => {

    const { bno } = useParams()

    console.log("read page---")
    // console.log(queryObj)


    return (
        <div>
            <div>Board Read Page</div>

            <ReadComponent bno={bno} />
        </div>
    );
}

export default ReadPage;