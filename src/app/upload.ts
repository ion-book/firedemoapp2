export class Upload {
// modelo de datos.
    $key: string;
    file:File;
    name:string;
    url:string;
    progress:number;
    createdAt: Date = new Date();
  
    constructor(file:File) {
      this.file = file;
    }
}
