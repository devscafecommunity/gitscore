import NewsHeader from "@/components/news/NewsHeader";
import NewsLister from "@/components/news/NewsLister";

export default function News() {
    return (
        <div className="flex flex-col items-center justify-center pb-2">
            <NewsHeader />
            <NewsLister />
            <div className="h-10"></div>
        </div>
    );
}