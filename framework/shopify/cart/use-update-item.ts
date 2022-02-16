import { useUpdateItem } from "@common/cart"

export default useUpdateItem

export const handler = {
    fetcherOptions: {
        query: useUpdateItem,
    },
    async fetcher({
        input: item,
        options,
        fetch
    }: any) {
        const { data } = await fetch({
            ...options,
            lineItems: [
                {
                    id: item.id,
                    variantId: item.id,
                    quantity: item.quantity ?? 1
                }
            ]
        })

        return data + "__modifired"
    },
    useHook: ({ fetch }: any) => () => {
        return async (input: any) => {
            const data = await fetch(input)
            return data
        }
    }
}