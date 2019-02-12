import { CollaborativesearchService } from 'arlas-web-core';
import { Configuration } from 'arlas-api';

export class Test {
    private searchService: CollaborativesearchService;
    private configuration: Configuration;

    constructor() {
        this.searchService = new CollaborativesearchService();
        this.configuration = new Configuration();
    }

    public getSearchService() {
        return this.searchService;
    }

    public getConfiguration() {
        return this.configuration;
    }
}