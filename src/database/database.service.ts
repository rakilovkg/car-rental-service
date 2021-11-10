import { Injectable } from '@nestjs/common';
import { Client } from 'pg';

@Injectable()
export class DatabaseService {
  private client: Client;

  constructor() {
    this.init();
  }

  async init() {
    this.client = new Client({
      host: process.env['PG_HOST'],
      port: process.env['PG_PORT'],
      database: process.env['PG_DATABASE'],
      user: process.env['PG_USER'],
      password: process.env['PG_PASSWORD']
    });
    await this.client.connect();
    console.log('DATABASE IS ON');
  }

  async query(text) {
    const result = await this.client.query(text);
    return result;
  }
}
