function augmentingPath(graph, start, end) {
    //console.log(start)
    if(start == end)
        return [end];
    arr = new Array();

    for(i=0; i < Object.keys(graph[start]).length; i++) {
        if(graph[start][Object.keys(graph[start])[i]] != 0) {
            graph[start][Object.keys(graph[start])[i]] = 0;
            //console.log(graph, "Deleted element")
            arr = [start].concat(augmentingPath(graph, Object.keys(graph[start])[i], end))
        } /*else
            return [];*/
    }
    if(arr.includes(end))
        return arr;
    else 
        return [];
}

