import Back from "../../tools/back";

const Header = () => {
  return (
      <>
          {/* header */}
          <div className="flex justify-between">
              {/* button pack page */}
              <Back/>
              {/* text page */}
              <p className="text-lg text-gray-200  font-medium">Payment</p>
              <div className="invisible"></div>
          </div>
      </>
  )
}
export default Header