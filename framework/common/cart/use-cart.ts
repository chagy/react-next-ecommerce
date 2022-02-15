import { useHook, useSWRHook } from '../utils/use-hook';
import { ApiHooks } from "@common/types/hooks"
import Cookies from "js-cookie"
import { SHOPIFY_CHECKOUT_ID_COOKIE } from '@framework/const';

const useCart = () => {
    const hook = useHook((hooks: ApiHooks) => hooks.cart.useCart)

    const fetcherWrapper: typeof hook.fetcher = (context) => {
        context.input.cartId = Cookies.get(SHOPIFY_CHECKOUT_ID_COOKIE)
        return hook.fetcher(context)
    }

    return useSWRHook({ ...hook, fetch: fetcherWrapper })
}

export default useCart
