import { ref } from 'vue';
import { defineStore }from 'pinia';

export const useCouponsStore = defineStore('coupons', () => {

    const couponInput = ref('');
    const couponValidationMsessage = ref('');
    const discountPercentage = ref(0);

    const VALID_COUPONS = [
        {name: '10DESCUENTO', discount: .10},
        {name: '20DESCUENTO', discount: .20}
    ]

    function applyCoupon() {
        if(VALID_COUPONS.some(coupon => coupon.name === couponInput.value)) {
            couponValidationMsessage.value = 'Aplicando...'

            setTimeout(() => {
                discountPercentage.value = VALID_COUPONS.find(coupon => coupon.name === couponInput.value).discount;
                couponValidationMsessage.value = '¡Descuento Aplicado!'
            }, 3000)
        } else {
            couponValidationMsessage.value = 'No existe ese cupón'
        }

        setTimeout(() => {
            couponValidationMsessage.value = ''
        }, 6000)
    }

    return {
        couponInput,
        applyCoupon,
        couponValidationMsessage
    }
})