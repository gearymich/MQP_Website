@echo off
REM PYTHONPATH may need to be changed to the relevent env variable used to
REM access python on the CLI for your specific machine.

set PYTHONPATH=python
echo "Starting FastAPI Backend..."
cd ../mqp-backend-23
%PYTHONPATH% .\app.py
PAUSE