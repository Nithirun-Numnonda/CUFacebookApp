import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  constructor(public http: Http) {
    console.log('Hello HttpProvider Provider');
  }
  getCommentsData(top,hour,day,month,year){
    var token = 'EAACEdEose0cBAEStAwV7Fr4Wh5HlH2U7zclJPJ7ZBp6prj2I3bZBF4UdlbueaWaiduzHPZBSPhuXJtJ9yGMKSNECHt4el9QJpGDQ10trwn2TuDFmgGCyJHprMPG8oGu3Su924vzoWVK5xegzkcgCwtJw3n3yO7WHQNKkxaMZCZAxvan6Pl1BSiWI8Ab23V4UFt9TPfPyRTAZDZD';
    var request='http://localhost:8080/comments?fields=id,name&since=-';
    if(year!='0'){
      request+=year+'%20years%20';
    }
    if(month!='0'){
      request+=month+'%20months%20';
    }
    if(day!='0'){
      request+=day+'%20days%20';
    }
    if(hour!='0'){
      request+=hour+'%20hour%20';
    }
    if(top!=''){
      request+='&top='+top;
    }
    request+='&access_token='+token;
    console.log("req: "+request);
    return this.http.get(request).map(res => res.json());
    
  }
  getLikesData(top,hour,day,month,year){
    var token = 'EAACEdEose0cBAEStAwV7Fr4Wh5HlH2U7zclJPJ7ZBp6prj2I3bZBF4UdlbueaWaiduzHPZBSPhuXJtJ9yGMKSNECHt4el9QJpGDQ10trwn2TuDFmgGCyJHprMPG8oGu3Su924vzoWVK5xegzkcgCwtJw3n3yO7WHQNKkxaMZCZAxvan6Pl1BSiWI8Ab23V4UFt9TPfPyRTAZDZD';
    var request='http://localhost:8080/likes?fields=id,name&since=-';
    if(year!='0'){
      request+=year+'%20years%20';
    }
    if(month!='0'){
      request+=month+'%20months%20';
    }
    if(day!='0'){
      request+=day+'%20days%20';
    }
    if(hour!='0'){
      request+=hour+'%20hour%20';
    }
    if(top!=''){
      request+='&top='+top;
    }
    request+='&access_token='+token;
    console.log("req: "+request);
    return this.http.get(request).map(res => res.json());
    
  }

}
