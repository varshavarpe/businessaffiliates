let Database = require("./Database");
var fs = require("fs")

class Businessaffiliates {
    id = 0;
    businessid = 0;
   userid = 0;
   requestedon = "";
   approvedon = "";
    status = "";
    db = new Database.Database();

    constructor(){
        this.id = 0;
        this.businessid = 0;
        this.userid = 0;
        this.requestedon = "";
        this.approvedon = "";
        this.status = "";
    }
    save=()=>{
        if(this.id==0){
            this.query = "INSERT INTO business_affiliates( businessid, userid, requestedon, approvedon, status )  ";
           this.query+= "VALUES ('"+ this.businessid +"','"+ this.userid +"','"+ this.requestedon+"','"+ this.approvedon +"','"+ this.status +"')"; 
        }
        else {
            this.query = "UPDATE business_affiliates SET businessid='"+ this.businessid+",userid='"+this.userid+"',"
            this.query += "requestedon='"+this.requestedon+"',approvedon='"+this.approvedon+"',status='"+this.status+"' WHERE id=" + this.id;
        }
       console.log(this.query);
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                this.db.close();
                if(err)
                    return reject(err);                
                resolve(result);
            });
        });           
    }
    get=()=>{
        this.query = "SELECT * FROM business_affiliates WHERE id = "+this.id;
        console.log(this.query);
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                this.db.close();
                if(err)
                    return reject(err);                
                resolve(result);
            });
        });           
    }
    list=()=>{
        this.query =  "SELECT * FROM business_affiliates ";
        console.log(this.query);
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                this.db.close();
                if(err)
                    return reject(err);                
                resolve(result);
            });
        });           
    }
    delete=()=>{
        this.query = "DELETE FROM business_affiliates  WHERE id = "+this.id+"";

        console.log(this.query);
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                this.db.close();
                if(err)
                    return reject(err);                
                resolve(result);
            });
        });           
    }

}
module.exports={
    Businessaffiliates:Businessaffiliates
}