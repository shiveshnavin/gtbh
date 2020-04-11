
mongoose-gen -m Note --fields userid:string,id:string,title:string,details:string,images:array,dateTime:string -r

mongoose-gen -m Disease --fields infoUrl:string,details:string,images:array,name:string,bodyPartId:string,categoryId:string -r

mongoose-gen -m HospitalService --fields infoUrl:string,details:string,images:array,name:string,bodyPartId:string,categoryId:string -r

mongoose-gen -m GenricUser --fields name:string,id:string,gender:array,married:string,occupation:string,phone:string,age:string,type:string -r
 
