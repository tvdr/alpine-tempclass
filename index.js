const AlpineTempclassMagicMethod = {
    start() {
        Alpine.addMagicProperty('tempclass', ($el) => {

            return (...parameters) => {

                var classes,timer,target;

                //accept class(es) as string
                if (typeof parameters[0] == 'string'){
                    classes = parameters[0].split(' ');

                //or as array
                }else if(Array.isArray(parameters[0])){
                    classes = parameters[0];
                }else{
                    console.warn('alpine-tempclass','First parameter must be an array or string, got',parameters[0]);
                    return false;
                }

                //add some default value if nothing is set
                if (typeof parameters[1] !== 'number'){
                    timer = 1000;
                }else{
                    //only integers!
                    timer = Math.round(parameters[1]); //only integers
                }

                //default is assigning to self
                if (typeof parameters[2] == 'undefined'){
                    target = $el;
                }else if (parameters[2] instanceof Element){
                    //use other Element as target
                    target = parameters[2];
                }else{
                    console.warn('alpine-tempclass','If third parameter is set, it must be an Element, got ',parameters[2]);
                    return false;
                }

                //do the mAgIcK
                target.classList.add(...classes);
                setTimeout(()=>{target.classList.remove(...classes)},timer);

            }
        })
    },
}

const alpine = window.deferLoadingAlpine || ((alpine) => alpine())

window.deferLoadingAlpine = function (callback) {
    AlpineTempclassMagicMethod.start()
    alpine(callback)
}

export default AlpineTempclassMagicMethod
