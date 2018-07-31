import Vue from 'vue'

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.filter('dateformat', (value)=>{
  return new Date(value).toLocaleString('pt-br');
})

Vue.filter('round', (value)=>{
  return Math.round(value * 100) / 100;
})

Vue.filter('money', (value,args)=>{
  const methods = {
    init(value,args){
        if (!value) {
            return '';
        }
      
        let splited = methods.splitDecimal(value);
      
        if(args){
            if(args.nominal){
                value = value + '';
                splited = {
                    decimal : ','+value.substring(value.length-2),
                    number: value.substring(0,value.length-2)
                }
            }
        }
        else
            splited = methods.splitDecimal(value);
      
        let formatedValue = methods.dotInsert(splited.number) + splited.decimal;
            
        if(args){
            if(args['preText'])
                formatedValue = args.preText + "" + formatedValue; 
      
            if(args['posText'])
                formatedValue = formatedValue + "" + args.posText; 
        }
      
        return formatedValue;
    },
    splitDecimal : function(value) {
        value = value + '';
        value = value.replace(/[^0-9\,]+/g,"");
				
        for(let pos = value.length; pos >= 0 ; pos-- ){
            if(value[pos] == ','){
                return  {
                    decimal : value.substring(pos,pos+(value.length-pos)),
                    number : value.substring(0,pos) 
                }
            }
        }	
        return {
            decimal : ",00",
            number : value
        };
    },
    dotInsert : function(value){
        value = value + '';
        if(value.length > 3){
            return this.dotInsert(value.substring(0,value.length-3)) + "." + value.substring(value.length-3);
        }
        else
            return value;
    }
  }
    
    return methods.init(value,args);  
    
})

Vue.filter('filter', (value,args)=>{
    const methods = {
        init(value, args){
            if(!value || !args)
                return [];
    
            if(!args.search) 
                return [];
        
            if(args.exclude){
        
                if(args.field){
        
                    if(args.partial){
                        return methods.excludePartialSearchOnField(value,args.search,args.field);
                    }
                    else{
                        return methods.excludeSearchOnField(value,args.search,args.field)
                    }
        
                }
                else{
        
                    if(args.partial){
                        return methods.excludePartialTerm(value,args.search);
                    }
                    else{
                        return methods.excludeMatchTerm(value,args.search)
                    } 
        
                }
        
            }else{
        
                if(args.field){
        
                    if(args.partial){
                        return methods.partialSearchOnField(value,args.search,args.field);
                    }
                    else{
                        return methods.searchOnField(value,args.search,args.field)
                    }
        
                }
                else{
        
                    if(args.partial){
                        return methods.partialTerm(value,args.search);
                    }
                    else{
                        return methods.matchTerm(value,args.search)
                    } 
                
                }
        
            }
            
        },
        partialTerm(value,search){
            let filtered = [];
        
            value.forEach(val => {
                let keys = Object.keys(val);
                for(let key = 0; key < keys.length; key++) {
                    let stringValue = val[keys[key]] + '';
                    if(stringValue.indexOf(search + '') != -1){
                        filtered.push(val)
                        break;
                    }
                }
            });
        
            return filtered;
        },
        matchTerm(value,search){
            let filtered = [];
        
            value.forEach(val => {
                let keys = Object.keys(val);
                for(let key = 0; key < keys.length; key++) {
                    if(val[keys[key]] == search){
                        filtered.push(val)
                        break;
                    }
                }
            });
        
            return filtered;
        },
        partialSearchOnField(value,search,field){
            return value.filter(val=>{
                let stringValue = val[field] + '';
                return stringValue.indexOf(search + '') != -1;
            })
        },
        searchOnField(value,search,field){
            return value.filter(val=>{
                return val[field] == search;
            })
        },
        excludePartialTerm(value,search){
            let filtered = [];
        
            value.forEach(val => {
                let keys = Object.keys(val);
                for(let key = 0; key < keys.length; key++) {
                let stringValue = val[keys[key]] + '';
                if(stringValue.indexOf(search + '') != -1){
                    break;
                }
                if(key == keys.length-1)
                    filtered.push(val);
                }
            });
            return filtered;
        },
        excludeMatchTerm(value,search){
            let filtered = [];
        
            value.forEach(val => {
                let keys = Object.keys(val);
                for(let key = 0; key < keys.length; key++) {
                if(val[keys[key]] == search){
                    break;
                }
                if(key == keys.length-1)
                    filtered.push(val)
                }
            });
            return filtered;
        },
        excludePartialSearchOnField(value,search,field){
            return value.filter(val=>{
                let stringValue = val[field] + '';
                return stringValue.indexOf(search + '') == -1;
            })
        },
        excludeSearchOnField(value,search,field){
            return value.filter(val=>{
                return val[field] != search;
            })
        }
    }
    
    return methods.init(value,args);
    
})