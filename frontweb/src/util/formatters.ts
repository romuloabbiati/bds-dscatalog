export const formatPrice = (price: number) => {

    const params = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    };

    return new Intl.NumberFormat('en-GB', params).format(price);
};