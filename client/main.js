import { Template } from 'meteor/templating';
import {_} from 'meteor/underscore';

import './main.html';

Template.hello.helpers({
	items: () => _.range(1, 10),
	range: () => _.range(1, 100)
});
