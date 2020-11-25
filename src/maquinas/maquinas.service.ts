import { Injectable } from '@nestjs/common';
const { Client } = require('@elastic/elasticsearch');

@Injectable()
export class MaquinasService {
  constructor() {}

  async create(data) {
    console.log('inserindo');
    var obj = {date: new Date(), data: data};
    const elasticSearchUrl = process.env.ELASTICSEARCH_HOST;
    const client = new Client({ node: `http://${elasticSearchUrl}:9200` });
    const index : string = process.env.ELASTIC_INDEX;
    const response = client.index({
      index,
      body: obj
    });
    console.log(response);
    return response;
  }

  async findAll() {
    console.log('consultando');
    const elasticSearchUrl = process.env.ELASTICSEARCH_HOST;
    const client = new Client({ node: `http://${elasticSearchUrl}:9200` });
    const index : string = process.env.ELASTIC_INDEX;
    return  client.search({
      index,
      body: {
        size: 200,
        query: {
          match_all: {}
        }
      },
    });
  }
}


