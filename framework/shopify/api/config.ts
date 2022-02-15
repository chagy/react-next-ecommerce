import { ApiConfig } from "@common/types/api"
import { fetchApi } from "../utils";
import { SHOPIFY_CHECKOUT_ID_COOKIE } from '../const';

class Config {
    private config: ApiConfig

    constructor(config: ApiConfig) {
        this.config = config
    }

    getConfig(): any {
        return this.config
    }
}

const configWrapper = new Config({
    fetch: fetchApi,
    checkoutCookie: SHOPIFY_CHECKOUT_ID_COOKIE
})

export function getConfig() {
    return configWrapper.getConfig()
}