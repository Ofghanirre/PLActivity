
export interface ExercisePlayer {
    path: Array<any>,
    circle_id: number,
    format: string,
    dependencies: string[],
    comments: string[],
    warnings: string[],
    data: Data
}


export interface Data {
    author: string,
    version:string,
    title: string,
    statement: string,
    formState: FormState
}

export interface FormState {
    selector: string,
    form: any
}


 