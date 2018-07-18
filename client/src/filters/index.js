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
    
})