import { Template } from 'meteor/templating';
import {_} from 'meteor/underscore';

import './main.html';

Template.hello.helpers({
	items: () => _.range(65, 80).map(String.fromCharCode),
	range: () => _.range(1, 100)
});
