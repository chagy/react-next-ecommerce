
const useAddItem = () => {
    return (input: any) => {
        return {
            output: JSON.stringify(input) + "_MODIFIDE"
        }
    }

}

export default useAddItem