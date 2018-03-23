"use strict";

function BT(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

BT.prototype.add = function(value){
   
    var isArray = Array.isArray(value);
    var that = this;
    if(isArray){

        value.forEach(function(ele) {
            if(ele<=that.value){  
                
                        if(!that.left){
                         
                            that.left = new BT(ele);
                           
                        }else{
                        
                            that.left.add(ele);
                        }
                    }else if(ele>that.value){
                
                        if(!that.right){
                
                            that.right = new BT(ele);  
                
                        }else{
                
                            that.right.add(ele);
                        }
                    }
        });
    }

    else{
        if(value<=this.value){  
            
                    if(!this.left){
                     
                        this.left = new BT(value);
                       
                    }else{
                    
                        this.left.add(value);
                    }
                }else if(value>this.value){
            
                    if(!this.right){
            
                        this.right = new BT(value);  
            
                    }else{
            
                        this.right.add(value);
                    }
                }
    }
    
}


BT.prototype.find =function(value){
    if(this.value===value){
        return true;
    }else{
        if(value<=this.value){  
            
            if(!this.left){
                
                return false;
                
            }else{
            
             return this.left.find(value)
            }
        }else if(value>this.value){

            if(!this.right){

                return false;

            }else{

             return   this.right.find(value);
            }
        }
    }
}

