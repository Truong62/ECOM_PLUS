import { Injectable } from '@nestjs/common';
import { hash, compare } from 'bcrypt';

@Injectable()
export class HashingService {
  async hashPassword(password: string): Promise<string> {
    const hashed: string = await hash(password, 10);
    return hashed;
  }

  async comparePassword(password: string, hashed: string): Promise<boolean> {
    const isMatch: boolean = await compare(password, hashed);
    return isMatch;
  }
}
