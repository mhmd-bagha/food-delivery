const ChangePassword = () => {
    return (
        <>
            <div className="bg_mirage px-8 py-12 rounded-t-main fixed bottom-0 w-full h-4/5">
                <p className="text-gray-200 text-xl font-medium">Change Password</p>
                {/* old password */}
                <div className="form_group mt-8 mb-4">
                    <input type="password" name="old_password" id="old_password" className="form_input" required/>
                    <label htmlFor="old_password" className="form_label">Old Password</label>
                </div>
                {/* text form change password */}
                <p className="color-auro_metal_saurus text-xs font-medium mb-3">Create New Password</p>
                {/* form change password */}
                <form action="/" method="post">
                    {/* password */}
                    <div className="form_group">
                        <input type="password" name="password" id="password" className="form_input" required/>
                        <label htmlFor="password" className="form_label">New Password</label>
                    </div>
                    {/* re password */}
                    <div className="form_group">
                        <input type="password" name="re_password" id="re_password" className="form_input" required/>
                        <label htmlFor="re_password" className="form_label">Re New Password</label>
                    </div>
                    {/* button save */}
                    <button type="submit"
                            className="bg_red_coral text-white text-lg font-bold w-full py-3.5 mt-20 rounded-2xl">Save
                    </button>
                </form>
            </div>
        </>
    )
}
export default ChangePassword