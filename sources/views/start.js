import {JetView} from 'webix-jet';
import {users} from '../models/users';

export default class Start extends JetView {
	config() {
		const user = {
			css: "userData",
			template: user => user.name,
			localId: "userData"
		};

		const image = {
			template: `<img src="https://assets-global.website-files.com/595a54aada702e28f89f766f/5a05d524e871a90001e20045_Avatar-3.jpg" style="max-width: 100px; max-height: 100px">`
		}

		return {
			rows: [
				user,
				image,
			]
		}
	}

	init(){
		users.waitData.then(() => {
			const firstUser = users.getItem(1);
			this.$$("userData").setValues(firstUser);
		});
	}
}
