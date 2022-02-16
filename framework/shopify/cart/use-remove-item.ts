import useRemoveItem from "@common/cart/use-remove-item"
import { Cart } from "@common/types/cart";
import { MutationHook } from "@common/types/hooks";
import { getCheckoutId } from "@framework/utils";
import { CheckoutLineItemsRemovePayload } from '../schema';

export default useRemoveItem

export type RemoveItemDescriptor = {
    fetcherInput: {
        id: string
    },
    fetcherOutput: {
        checkoutLineItemsRemove: CheckoutLineItemsRemovePayload
    },
    data: Cart
}

export const handler: MutationHook<RemoveItemDescriptor> = {
    fetcherOptions: {
        query: "query{hello}"
    },
    async fetcher({
        input: { id },
        options,
        fetch
    }) {
        const { data } = await fetch({
            ...options,
            variables: {
                checkoutId: getCheckoutId(),
                lineItemsIds: [id]
            }
        })

        return data + "_modified" as any
    },
    useHook: ({ fetch }) => () => {

        return async (input) => {
            const data = await fetch(input)
            return data
        }
    }
}