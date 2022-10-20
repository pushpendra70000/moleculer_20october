


//named expot

module.exports = {
    //1 property : value
     name:"student",

     settings:{},


     dependencies:[],

    actions:{
        myaction:{
            //1 p:v
            rest:{
                method:"POST",
                path:"/myaction"

            },  
            //2 method
            handler(){
                let nodeid = this.broker.nodeID;
                return ' hello from myaction ' + nodeid;
            }
        }
    },


    methods:{},

    // events are sockets
    events:{

    }

    //2 methods
};