import ListPostsNewer from "../../../components/recent/ListPostsNewer";
import RssBtn from "../../../components/general/RssBtn";

export default function Recent() {
    return (
        <div className="flex flex-col items-center justify-center w-1/3 p-4">
            <div className="flex items-center p-2 rounded-full m-6">
                <h1 className="text-5xl font-bold text-center">
                    Posts recentes do Blog <span className="text-blue">Dev&apos;s Café</span>
                </h1>
            </div>
            <ListPostsNewer />
            <RssBtn />
        </div>
    );
}