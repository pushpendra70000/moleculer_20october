


//named expot

module.exports = {
    //1 property : value
     name:"teacher",

     settings:{},


     dependencies:[],

    actions:{
        myaction1:{
            //1 p:v
            rest:{
                method:"POST",
                path:"/myaction1"

            },  
            //2 method
            handler(){
                let nodeid = this.broker.nodeID;
                return ' hello from myaction1 ' + nodeid;
            }
        }
    },


    methods:{},

    // events are sockets
    events:{
        "microservice_assignment.submit":{
            group:"microservice",
            handler:(ctx)=>{
                console.log("submit moleculer assignment" + ctx.params.payload)
            }
        },
        "monolithic_assignment.submit":{
            group:"monolithic",
            handler:(ctx)=>{
                console.log("submit monolithic assignment" + ctx.params.payload)
            }
    }    
    }
    //2 methods
};