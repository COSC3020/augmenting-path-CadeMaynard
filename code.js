function augmentingPath(graph, start, end) {
    return augmentHelp(graph, start,start,end)
}

function augmentHelp(graph, origStart, start, end) {
    if(start == end) {return [end];}
    arr1 = new Array();
    for(let i=0; i < Object.keys(graph[start]).length; i++) {
        if(graph[start][Object.keys(graph[start])[i]] != 0 && Object.keys(graph[start])[i] != origStart) {
            graph[start][Object.keys(graph[start])[i]] = 0;
            arr1 = [start].concat(augmentHelp(graph, origStart, Object.keys(graph[start])[i], end))
        }
        if(arr1.includes(end)) {return arr1;}
    }
    return [];
}
