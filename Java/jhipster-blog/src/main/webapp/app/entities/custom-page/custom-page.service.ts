import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { ICustomPage } from 'app/shared/model/custom-page.model';

type EntityResponseType = HttpResponse<ICustomPage>;
type EntityArrayResponseType = HttpResponse<ICustomPage[]>;

@Injectable({ providedIn: 'root' })
export class CustomPageService {
  public resourceUrl = SERVER_API_URL + 'api/custom-pages';

  constructor(protected http: HttpClient) {}

  create(customPage: ICustomPage): Observable<EntityResponseType> {
    return this.http.post<ICustomPage>(this.resourceUrl, customPage, { observe: 'response' });
  }

  update(customPage: ICustomPage): Observable<EntityResponseType> {
    return this.http.put<ICustomPage>(this.resourceUrl, customPage, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ICustomPage>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ICustomPage[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
