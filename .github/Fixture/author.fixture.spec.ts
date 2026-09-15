import {test as base, Browser, BrowserContext} from '@playwright/test';

type authorFixture = {

author: string;


};
base.extend<authorFixture>({

    author: async ({ page },use )=>{
console.log('--setting up fixture --- ');

 await use('Babita thakur');
 console.log('--tearing down all fixture --- ');
    }
});