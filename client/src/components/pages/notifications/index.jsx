import Header from "./header";
import BottomNavigation from "../../ui/bottom-navigation";
import NotificationsView from "./notifications";

const Notifications = () => {
    return (
        <>
            {/* background full */}
            <section className="bg_mirage h-full">
                {/* start page */}
                <div className="bg_dark h-5/6 rounded-b-main">
                    {/* header */}
                    <Header/>
                    {/* notifications */}
                    <NotificationsView/>
                </div>
                <BottomNavigation/>
            </section>
        </>
    )
}
export default Notifications