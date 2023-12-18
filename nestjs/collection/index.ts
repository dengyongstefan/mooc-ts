class Collection {
    static collection : Collection =  new Collection()
    private constructor(){}
    private containerMap = new Map()
    set(id: any,val: any){
        this.containerMap.set(id,val)
    }
    get(id:any){
        return this.containerMap.get(id)
    }
    has(id:any){
        return this.containerMap.has(id)
    }
}

export default Collection.collection