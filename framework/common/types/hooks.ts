import { ApiFetcher, ApiFetcherOptions } from "./api"
export interface ApiHooks {
    cart: {
        useAddItem: MutationHook
        useCart: any
    }
}

export type MutationHookContext<Input, Output> = {
    fetch: (input: any) => Promise<any>
}

export type FetcherHookContext<Input, Output> = {
    input: any
    fetch: ApiFetcher
    options: ApiFetcherOptions
}

export type HookFetcherOptions = {
    query: string
}

export type HookFetcherFn<Input, Output, Data> = (context: FetcherHookContext<Input, Output>) => Promise<Data>

export type HookDescriptor = {
    fetcherInput: any
    fetcherOutput: any
    data: any
}

export type MutationHook<H extends HookDescriptor = any> = {
    fetcherOptions: ApiFetcherOptions,
    fetcher: HookFetcherFn<H["fetcherInput"], H["fetcherOutput"], H["data"]>,
    useHook(
        context: MutationHookContext<H["fetcherInput"], H["data"]>
    ): (input: H["fetcherInput"]) => Promise<H["data"]>
}