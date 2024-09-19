
import { cloneElement } from 'react';
function PropertyMap({map ,children}){
    /*
     * map := {type_to_apply_to: {property_name: property_value}}
     * PropertyMap applys a set of properties to its children based on their type!
     * only works on react objects
     * note that in order to send actual variables through a diccionary one must say {[variable]:1} instead of {variable:1}
    */
    if(children==null){
        console.log('PropertyMap created with no specified children');
        return(null);
    }
    if(!Array.isArray(children)){
        children=[children]
    }
    return(children.map((x, index) => {
        if (!(x.type in map)){return(x);}
        return cloneElement(x,Object.assign({}, map[x.type], {key:index}));
    }));
}
export default PropertyMap;
