type MaterialOutputs<T extends Material<any, any>[]> = {
    [K in keyof T]: K extends number ? ReturnType<T[K]["rand"]> : any
}

interface Arg<T, I extends Material<any, any>[]> {
    inputMaterials: I
    rand: (seed: number, ...inputValues: MaterialOutputs<I>) => T

    categories?: Iterable<T>
    range?: [number, number] | Record<string, [number, number]>
}
export class Material<T, I extends Material<any, any>[]> {
    inputMaterials: I
    private _rand: (seed: number, ...inputValues: MaterialOutputs<I>) => T

    categories?: Iterable<T>
    range?: [number, number] | Record<string, [number, number]>

    constructor({inputMaterials, rand, categories, range}: Arg<T, I>){
        this.inputMaterials = inputMaterials
        this._rand = rand

        this.categories = categories
        this.range = range
    }
    rand(seed: number): T {
        return this._rand(
            seed, 
            ...this.inputMaterials.map(material => material.rand(0)) as any // should fixed
        )
    }
}

export class Categorical<T, I extends Material<any, any>[]> extends Material<T, I> {
    categories: Iterable<T> = []
    constructor(args: Arg<T, I>){
        super(args)
    }
}
export class Nominal<I extends Material<any, any>[]> extends Categorical<string, I> {
    constructor(args: Arg<string, I>){
        super(args)
    }
}

export class Numerical<I extends Material<any, any>[]> extends Material<number, I> {
    range: [number, number] = [0, 0]
    constructor(args: Arg<number, I>){
        super(args)
    }
}

export class ComplexNumerical<I extends Material<any, any>[]> extends Material<Record<string, number>, I> {
    range: Record<string, [number, number]> = {}
    constructor(args: Arg<Record<string, number>, I>){
        super(args)
    }
}