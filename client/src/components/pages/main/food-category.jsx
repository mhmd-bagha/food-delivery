const FoodCategory = () => {
    return (
        <>
            <div className="flex gap-10 mt-7 overflow-x-scroll py-3 color-auro_metal_saurus text-lg">
                <p className="food_category">Pizza</p>
                <p className="food_category">Humber</p>
                <p className="food_category active">Sushi</p>
                <p className="food_category">Kebab</p>
                <p className="food_category">Soup</p>
            </div>
        </>
    )
}
export default FoodCategory