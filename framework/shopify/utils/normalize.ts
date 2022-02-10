import { Product as ShopifyProduct, ImageEdge, MoneyV2, ProductOption } from '../schema';
import { Product } from "@common/types/product"

const normalizeProductImages = ({ edges }: { edges: Array<ImageEdge> }) =>
    edges.map(({ node: { originalSrc: url, ...rest } }) => ({
        url: `/images/${url}`,
        ...rest
    }
    ))

const normalizeProductPrice = ({ currencyCode, amount }: MoneyV2) => ({

    value: +amount,
    currencyCode

})

const normalizeProductOption = ({ id, values, name: displayName }: ProductOption) => {
    return {}
}

export function normalizeProduct(productNode: ShopifyProduct): Product {
    const {
        id,
        title: name,
        handle,
        vendor,
        description,
        images: imageConnection,
        priceRange,
        options,
        ...rest
    } = productNode

    const product = {
        id,
        name,
        vendor,
        description,
        path: `/${handle}`,
        slug: handle.replace(/^\/+|\/+$/g, ""),
        images: normalizeProductImages(imageConnection),
        price: normalizeProductPrice(priceRange.minVariantPrice),
        options: options ? options.filter(o => o.name !== "Title").map(o => normalizeProductOption(o)) : [],
        ...rest
    }

    return product
}