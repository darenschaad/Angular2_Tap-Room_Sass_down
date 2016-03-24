import {Pipe, PipeTransform} from 'angular2/core';
import {Keg} from './keg.model';

@Pipe({
  name: "abv",
  pure: false
})
export class AbvPipe implements PipeTransform {
  transform(input: Keg[], args) {
    var desiredState = args[0];
    if(desiredState === "low"){
      return input.filter((keg) =>{
        return keg.abv < 5;
      });
    }else if(desiredState === "medium"){
      return input.filter((keg) =>{
        return (keg.abv >= 5 && keg.abv <= 8)
      });
    }else if (desiredState === "high"){
      return input.filter((keg) =>{
        return (keg.abv > 8)
      });
    }else {
      return input;
    }
  }
}
