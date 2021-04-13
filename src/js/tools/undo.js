import app from './../app.js';
import Base_tools_class from './../core/base-tools.js';

class Undo_class extends Base_tools_class{
    constructor(ctx) {
        super();
        this.name = 'undo';
    }
    load(){
            // nothing
    }
    render(){
            // nothing
    }
    on_activate(){
	app.State.undo();
    }

}

export default Undo_class;
