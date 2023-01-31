import BottomNavigation from "../../ui/bottom-navigation";
import NotificationsView from "./notifications";
import Menu from "../../ui/menu/menu";

const Notifications = () => {
    return (
        <>
            {/* background full */}
            <section className="bg_mirage h-full">
                {/* start page */}
                <div className="bg_dark h-5/6 rounded-b-main">
                    {/* the menu and image and text current page */}
                    <Menu textCurrentPage="Notification"/>
                    {/* notifications */}
                    <NotificationsView/>
                </div>
                <BottomNavigation/>
            </section>
        </>
    )
}
export default Notifications