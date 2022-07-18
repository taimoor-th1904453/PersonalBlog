class quotesRepo {

    async getQuotes(){
        const res = await fetch("https://type.fit/api/quotes")
        const data = await res.json()
        // console.log(data)
        return data
    }

}
export default new quotesRepo();