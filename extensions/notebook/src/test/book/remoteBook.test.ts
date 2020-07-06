/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

//import * as azdata from 'azdata';
import * as TypeMoq from 'typemoq';
import { RemoteBookDialogModel } from '../../dialog/remoteBookDialog';
import { IReleases, IAssets, RemoteBookController } from '../../book/remoteBookController';
import * as should from 'should';
//import { ApiWrapper } from '../../common/apiWrapper';
//import { EventEmitter } from 'vscode';
import * as loc from '../../common/localizedConstants';
//import { TestButton, createViewContext, TestDropdownComponent } from '../../test/common';

export interface IExpectedBookItem {
	title: string;
	url?: string;
	sections?: any[];
	external?: boolean;
	previousUri?: string | undefined;
	nextUri?: string | undefined;
}

describe('Add Remote Book Dialog', function () {
	//let apiWrapper = new ApiWrapper();
	let remoteBookDialogModel = TypeMoq.Mock.ofInstance(new RemoteBookDialogModel);
	//let testDialog = TypeMoq.Mock.ofType(RemoteBookDialog);

	beforeEach(() => {
		// let mockReleasesDropdown = new TestDropdownComponent(new EventEmitter<void>());
		// let mockBookDropdown = new TestDropdownComponent(new EventEmitter<void>());
		// let mockVersionDropdown = new TestDropdownComponent(new EventEmitter<void>());
		// let mockLanguageDropdown = new TestDropdownComponent(new EventEmitter<void>());
		// testDialog.object.releaseDropdown = mockReleasesDropdown;
		// testDialog.object.bookDropdown = mockBookDropdown;
		// testDialog.object.versionDropdown = mockVersionDropdown;
		// testDialog.object.languageDropdown = mockLanguageDropdown;
		// testDialog.setup(d => d.createDialog()).returns(() => Promise.resolve());
		// testDialog.setup(d => d.getAssets()).returns(() => Promise.resolve());

		// remoteBookDialog = testDialog.object;

	});

	it('Should open dialog successfully ', async function (): Promise<void> {
		//let remoteBookDialog = new RemoteBookDialog(remoteBookDialogModel.object);
		//await should(remoteBookDialog.createDialog()).be.resolved();
	});

	it('getReleases should return true if there are releases', async function (): Promise<void> {
		//let testContext = createContext();
		let dummy_releases: IReleases[] = [{
			name: 'Test Release',
			assets_url: new URL('c://new/assets/url'),
		},
		{
			name: 'Test Release1',
			assets_url: new URL('c://new/assets1/url'),
		}];

		let dummy_url = new URL('c://new/releases/url');
		let controller = TypeMoq.Mock.ofType(RemoteBookController);
		controller.setup(x => x.model).returns(() => new RemoteBookDialogModel());
		controller.setup(x => x.fetchGithubReleases(dummy_url)).returns(() => Promise.resolve(dummy_releases));
		let temp = await controller.object.fetchGithubReleases(dummy_url);
		controller.setup(x => x.model.releases()).returns(() => temp);
		should(controller.object.model.releases).be.deepEqual(dummy_releases);
	});

	it('getAssets should fill the assets dropdown', async function (): Promise<void> {
		let release: IReleases = {
			name: 'Test Release',
			assets_url: new URL('c://new/assets/url'),
		};

		let assets: IAssets[] = [{
			name: 'CU5-1.1-EN.zip',
			browser_download_url: new URL('c://new/assets/url/book/CU5'),
			book: 'CU5',
			version: '1.1',
			language: 'EN',
			url: new URL('c://new/assets/url')
		}];
		remoteBookDialogModel.target.releases = [release];
		remoteBookDialogModel.target.assets = assets;
		remoteBookDialogModel.target.remoteLocation = loc.onGitHub;
		// remoteBookDialogModel.setup(x => x.getListAssets(release)).returns(() => Promise.resolve(assets));
		// should(await remoteBookDialogModel.target.getListAssets(release)).not.be.undefined();
		// should(await remoteBookDialogModel.target.getListAssets(release)).deepEqual(assets);
		// await remoteBookDialog.createDialog();
		// remoteBookDialog.releaseDropdown.value = release.name;
		// await remoteBookDialog.getAssets();
		// should(remoteBookDialog.bookDropdown.value).deepEqual(assets[0].book);
	});

	it('Should extract the folder containing books', async function (): Promise<void> {

	});

	// it('Should get selected book and map it to the asset', async function() : Promise<void>{
	// 	let testContext = createViewContext();
	// 	let assets : IAssets[] = [{
	// 		name: 'CU5-1.1-EN.zip',
	// 		browser_download_url: new URL('c://new/assets/url/book/CU5'),
	// 		book: 'CU5',
	// 		version: '1.1',
	// 		language: 'EN',
	// 		url:  new URL('c://new/assets/url')
	// 	}];

	// 	//testContext.model.setup(x => x.getListAssets(release)).returns(() => Promise.resolve(true));
	// 	testContext.model.object.assets = assets;
	// 	testContext.dialog.setup(x => x.createDialog()).returns(() => Promise.resolve());
	// 	testContext.dialog.setup(x => x.getAssets()).returns(() => Promise.resolve());
	// 	let dialog = testContext.dialog.object;
	// 	should.notEqual(dialog.bookDropdown, undefined);
	// 	should.notEqual(dialog.versionDropdown, undefined);
	// 	should.notEqual(dialog.languageDropdown, undefined);
	// });

	// it('Should create book from assets', async function() : Promise<void>{
	// 	//let testContext = createViewContext();
	// });

});
