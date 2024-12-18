function depthFirstSearch(graph, startNode, targetNode) {
    let visited = [];
    for(let i = 0; i < graph.length; i++){visited[i]=false;}
    let path = [];
    return dfs(graph, startNode, targetNode, visited, path);
}

function dfs(graph, startNode, targetNode, visited, path){
    if(visited[startNode]){
        return null;
    }
    else if(startNode === targetNode){
        path.push(startNode);
        return (path);
    
    }
    else{
        visited[startNode] = true;
        path.push(startNode);
        for(i = 0; i < graph[startNode].length; i++){
            result = dfs(graph, graph[startNode][i], targetNode, visited, path);
            if(result){return path;}
        }
    }
}
