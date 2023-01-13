import ReadText from "../../tools/read-text";
import {MdContentPaste} from "react-icons/md";

const CouponTaxation = () => {
  return(
      <>
          {/* coupon code and taxation */}
          <div className="pt-6">
              {/* coupon coed */}
              <p className="text-white text-sm font-medium">Add Coupon</p>
              <div className="form_group">
                  <input type="text" id="coupon-code" className="form_input_internal" required/>
                  <label htmlFor="coupon-code" className="form_label_internal">Coupon Code</label>
                  <button
                      className="absolute bottom-1/4 right-4 float-right cursor-pointer bg_gunmetal p-3 rounded-xl"
                      onClick={() => ReadText('coupon-code')}>
                      <MdContentPaste size={21} className="color-auro_metal_saurus"/>
                  </button>
              </div>
          </div>
          {/* taxation */}
          <div className="flex justify-between items-center mt-16 pb-16">
              <p className="text-white text-sm font-medium">Taxation</p>
              <p className="text-white text-lg font-bold">$15.00</p>
          </div>
      </>
  )
}
export default CouponTaxation