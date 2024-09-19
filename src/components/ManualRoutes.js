import PropertyMap from 'src/components/PropertyMap'
function ManualRoutes({source ,children}){
    return(<PropertyMap map={{[ManualRoute]: {source: source}}} children={children}/>);
}
function ManualRoute({route, source, element}){
    if(new RegExp(route).test(source)){
        return(element);
    }
}
export {ManualRoutes, ManualRoute}
