export class Bands {

  constructor( public bandname: string,
               public bandtype: string,
               public discription: string,
               public bandImg : any,
               public members: [{
                 firstname: string,
                 lastname: string
               }],
               public songs:  [{
                  songname:string,
                  songtime: string
               }]) {}

}
