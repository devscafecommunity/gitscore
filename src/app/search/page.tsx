import Image from "next/image";
import SearchContent from "../../../components/search/SearchContent";
import RssBtn from "../../../components/general/RssBtn";

export default function Search() {
    return (
        <div className="flex flex-col items-center justify-center w-1/3 p-4">
            <div className="flex items-center p-2 rounded-full m-6">
                <h1 className="text-5xl font-bold text-center">
                    Pesquise posts do <span className="text-blue">Blog Dev&apos;s Café</span>
                </h1>
            </div>
            <SearchContent />
            <RssBtn />
        </div>
    );
}