import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  //first argument should be the item which have to be transform and 
  // the secound argument is based on which the transformation have to be done
  transform(allEmployee:any[], searchKey:string): any[] {
    
    const result:any= []

    if(!allEmployee || searchKey===""){
      return allEmployee
    }
    allEmployee.forEach((item:any)=>{
      //includes returns boolen value
      if(item.name.trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
        result.push(item)
      }
    })
    return result;
  }

}
