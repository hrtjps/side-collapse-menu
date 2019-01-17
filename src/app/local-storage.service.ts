import { Injectable, Inject } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

const STORAGE_KEY = 'local_flags';

@Injectable({
  providedIn: 'root'
})
export class Flag {
  flag1: boolean;
  flag2: boolean;
}
export class LocalStorageService {
  flags: Flag;

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) { }

  public storeCurrentFlags(flag1: boolean, flag2: boolean): void {
    const data = {
      flag1: flag1,
      flag2: flag2
    };

    this.storage.set(STORAGE_KEY, data);
    console.log(this.storage.get(STORAGE_KEY));
  }

  public loadFlag(): Flag {
    this.flags = this.storage.get(STORAGE_KEY) || [];
    return this.flags;
  }
}
