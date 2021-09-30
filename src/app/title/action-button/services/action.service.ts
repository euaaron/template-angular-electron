import { Injectable } from '@angular/core';
import { IpcService } from '../../../core/ipc.service';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor(private app: IpcService) {}

  public run(type: string): void {
    this.app.run(type);
  }

}
