// Enum of status
export const Status = {
    Unknow : 'Unknow',
    ToDo : 'ToDo',
    Doing : 'Doing',
    Done : 'Done'
}

// Represents an item of TODO list
export class Item{
    constructor( title, status = Status.ToDo){
        this.title = title;
        this.status = status;
    }
}