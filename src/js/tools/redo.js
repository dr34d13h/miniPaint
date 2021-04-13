import app from './../app.js';
import Base_tools_class from './../core/base-tools.js';

class Redo_class extends Base_tools_class{
    constructor(ctx) {
        super();
        this.name = 'redo';
    }
    load(){
            // nothing
    }
    render(){
            // nothing
    }
    on_activate(){
        app.State.redo();
    }

}

export default Redo_class;

