import BottomNavigation from "../../ui/bottom-navigation";
import HistoryView from "./histories";
import Menu from "../../ui/menu/menu";

const History = () => {
    return (
        <>
            {/* background full */}
            <section className="bg_mirage h-full">
                <div className="bg_dark h-5/6 rounded-b-main">
                    {/* the menu and image and text current page */}
                    <Menu textCurrentPage="History"/>
                    {/* notifications */}
                    <HistoryView/>
                </div>
                <BottomNavigation/>
            </section>
        </>
    )
}
export default History