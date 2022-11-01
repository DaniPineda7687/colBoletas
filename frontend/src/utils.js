const formatPrices = (price)=>{
    const formatPrice = price.toLocaleString("es", {
        style: "currency",
        currency: "COP"
    });
    return formatPrice;
}
export default formatPrices;