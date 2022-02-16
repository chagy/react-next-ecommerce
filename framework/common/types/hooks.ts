import { ApiFetcher, ApiFetcherOptions } from "./api"
export interface ApiHooks {
    cart: {
        useAddItem: MutationHook
        useCart: any
    }
}

export type MutationHookContext = {
    fetch: (input: any) => Promise<any>
}

export type FetcherHookContext = {
    input?: any
    fetch: ApiFetcher
    options: ApiFetcherOptions
}

export type HookFetcherOptions = {
    query: string
}

export type HookFetcherFn = (context: FetcherHookContext) => Promise<any>

export type MutationHook = {
    fetcherOptions: ApiFetcherOptions,
    fetcher: HookFetcherFn,
    useHook(
        context: MutationHookContext
    ): (input: any) => any
}