import { combineReducers } from 'redux';
import cedl from './cedl';
import cer from './cer';
import cerdl from './cerdl';
import cersl from './cersl';
import cp from './cp';
import cts from './cts';
import ppc from './ppc';
import stua from './stua';
import stuadl from './stuadl';
import stuapdl from './stuapdl';

export default combineReducers({
	cedl,
	cer,
	cerdl,
	cersl,
	cp,
	cts,
	ppc,
	stua,
	stuadl,
	stuapdl
})
