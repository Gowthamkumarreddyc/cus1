import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fillter'
})
export class FillterPipe implements PipeTransform {

  transform(value: any, filterString: string ) {
  if(value.length === null || filterString === ""){
    return value;
  }
  const users:any = [];
  value.forEach((a:any)=>{
    if(a['name'].trim().toLowerCase().includes(filterString.toLowerCase())){
      users.push(a)
    }
  });
  return users;
  }

}
