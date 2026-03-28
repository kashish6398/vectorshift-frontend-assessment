from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from typing import Dict, Any

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
) 

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
async def parse_pipeline(data: Dict[str, Any]):
    nodes = data.get("nodes", [])
    edges = data.get("edges", [])
    
    num_nodes = len(nodes)
    num_edges = len(edges)
    
    # Check if the graph is a Directed Acyclic Graph (DAG)
    graph = {node["id"]: [] for node in nodes}
    for edge in edges:
        source = edge.get("source")
        target = edge.get("target")
        if source in graph:
            graph[source].append(target)
            
    # State tracking: 0 = unvisited, 1 = visiting, 2 = visited
    visited = {}
    
    def is_cyclic(node_id):
        if visited.get(node_id) == 1:
            return True
        if visited.get(node_id) == 2:
            return False
            
        visited[node_id] = 1
        for neighbor in graph.get(node_id, []):
            if is_cyclic(neighbor):
                return True
        visited[node_id] = 2
        return False
        
    is_dag = True
    for node in nodes:
        if node["id"] not in visited:
            if is_cyclic(node["id"]):
                is_dag = False
                break
                
    return {"num_nodes": num_nodes, "num_edges": num_edges, "is_dag": is_dag}

