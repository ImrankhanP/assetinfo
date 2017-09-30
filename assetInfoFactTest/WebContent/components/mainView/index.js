
app.mainView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
//app.localization.registerView('mainView');

function onLoad(){
	  $("#tabstrip").kendoTabStrip({
          animation:  {
              open: {
                  effects: "fadeIn"
              }
          }
      });
   $("#dropdownlist").kendoDropDownList({
   dataSource: {
     data: ["USA", "INDIA","GERMANY","LONDON","CHINA","SINGAPORE"]
   },
   animation: false
   });
   //console.log(this.data)
    $(function() {
       var dataSource = new kendo.data.DataSource({
   		transport: {
 			read: {
 				url: "data.json",
 				dataType: "json",
 				data: {
 					q: "javascript"
 				}
 			}
 		},
 		schema: {
 			data: "results" 
 		},
 		filter : {
 			logic : "or",
 			filters : [
 				{ field: "tileHeader", operator: "contains", value:"Default"},
 				{ field: "tileHeader", operator: "contains", value:"Asset Perfomance Benchmarking"}
 			]
 		}
       }); 

       $("#listView").kendoListView({
           dataSource: dataSource,
           template: kendo.template($("#template").html()),
           endlessScroll: true,
           virtualViewSize: 100, 
           dataBound: function(e) {
           }
       });
       

       
   });
   $(function() {
       var dataSource1 = new kendo.data.DataSource({
   		transport: {
 			read: {
 				url: "data.json",
 				dataType: "json",
 				data: {
 					q: "javascript"
 				}
 			}
 		},
 		schema: {
 			data: "results" 
 		},
 		filter : {
 			logic : "or",
 			filters : [
 				{ field: "tileHeader", operator: "contains", value:"Default"},
 				{ field: "tileHeader", operator: "contains", value:"Process Effectivesness"}
 			]
 		}
       });



       $("#listView1").kendoListView({
           dataSource: dataSource1,
           endlessScroll: true,
           virtualViewSize: 100, 
           template: kendo.template($("#template1").html())
       });  
       
       
   });
   $(function() {
       var dataSource2 = new kendo.data.DataSource({
   		transport: {
 			read: {
 				url: "data.json",
 				dataType: "json",
 				data: {
 					q: "javascript"
 				}
 			}
 		},
 		schema: {
 			data: "results" 
 		},
 		filter : {
 			logic : "or",
 			filters : [
 				{ field: "tileHeader", operator: "contains", value:"Default"},
 				{ field: "tileHeader", operator: "contains", value:"Self Service BI"}
 			]
 		}
       });

       $("#listView2").kendoListView({
           dataSource: dataSource2,
           endlessScroll: true,
           virtualViewSize: 100, 
           template: kendo.template($("#template2").html())
       });
   });
}
function myImage(event){
	       $("#loginDialog").kendoWindow({
               width: "600px",
               title: "About Alvar Aalto",
               visible: false,
               actions: [
                   "Pin",
                   "Minimize",
                   "Maximize",
                   "Close"
               ],
               //close: onClose
           }).data("kendoWindow").center().open();
}