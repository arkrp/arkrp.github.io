import { cloneElement } from 'react';
function PropertyMap({map ,children}){
    /*
     * map := {type_to_apply_to: {property_name: property_value}}
     * PropertyMap applys a set of properties to its children based on their type!
     * only works on react objects
    */
    if(children==null){
        console.log('PropertyMap created with no specified children');
        return(null);
    }
    if(!Array.isArray(children)){
        children=[children]
    }
    return(children.map((x, index) => {
        if (!(x.type.name in map)){return(x);}
        return cloneElement(x,Object.assign({}, map[x.type.name], {key:index}));
    }));
}
function ManualRoutes({source ,children}){
    return(<PropertyMap map={{ManualRoute: {source: source}}} children={children}/>);
}
function ManualRoute({route, source, element}){
    if(new RegExp(route).test(source)){
        return(element);
    }
}
export {ManualRoutes, ManualRoute}
