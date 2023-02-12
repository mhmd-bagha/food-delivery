const PriceFormat = (price) => {
    // regex price format
    const formatPrice = /\B(?=(\d{2})+(?!\d))/g

    return price.toString().replace(formatPrice, ",")
}

export default PriceFormat