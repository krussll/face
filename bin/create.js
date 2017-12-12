#!/usr/bin/env node

'use strict';
function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

function getPassword(id) {
	return '1amn0tab0ttru2tm3' + id;
}

const puppeteer = require('puppeteer');
const random_name = require('node-random-name');
(async() => {

	const name = random_name();
	const id = 4;
	const browser = await puppeteer.launch({slowMo: 500});
	const page = await browser.newPage();
	console.log('we have page');
	await page.goto('https://www.twitter.com', {waitUntil: 'networkidle0'});
	console.log(page.url());

	await page.click('a.js-signup');
	console.log(page.url());
	
	
	await page.focus('#full-name')
	await page.keyboard.type(name); 
	
	await page.focus('#email')
	await page.keyboard.type('iamnotabottrustme+' + id + '@gmail.com'); 
	
	await page.focus('#password')
	await page.keyboard.type(getPassword(id)); 
	
	console.log('form filled in');
	await page.click('#submit_button');
	console.log('submit form');

	await delay(3000);
	await page.click('a.skip-link');
	console.log(page.url());
	await delay(3000);
	await page.click('a.skip-link');
	console.log(page.url());
	await delay(3000);
	await page.click('a.js-complete-step');
	console.log(page.url());
	await delay(3000);
  await page.screenshot({path: 'example2.png'});
	await page.click('a.js-continue');
	console.log(page.url());
	await delay(3000);
	await page.click('a.js-skip-step');
	console.log(page.url());
	await delay(3000);
	await page.click('a.btn-follow-all');
	console.log(page.url());
	await delay(3000);
	await page.click('a.js-close');
	console.log(page.url());

})();
