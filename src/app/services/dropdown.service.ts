import {Injectable} from '@angular/core';
// @ts-ignore
import * as _ from 'lodash'

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor() { }

  getDropDownText(id: string, object: { id: number; name: string; }[]){
    return _.filter(object, function (o: { id: any; }) {
      return (_.includes(id, o.id));
    });
  }
}
