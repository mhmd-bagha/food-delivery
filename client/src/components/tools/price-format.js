const PriceFormat = (price, characterReplace = ',') => {
    // regex price format
    const formatPrice = /\B(?=(\d{2})+(?!\d))/g

    return price.toString().replace(formatPrice, characterReplace)
}

export default PriceFormat