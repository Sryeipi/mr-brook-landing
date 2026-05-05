"""Threaded HTTP server for local QA — handles concurrent requests."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import os, sys

os.chdir(os.path.dirname(os.path.abspath(__file__)))
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8765

class Handler(SimpleHTTPRequestHandler):
    def log_message(self, *a, **kw): pass  # silent

print(f"Serving {os.getcwd()} on http://localhost:{PORT}/", flush=True)
ThreadingHTTPServer(('127.0.0.1', PORT), Handler).serve_forever()
