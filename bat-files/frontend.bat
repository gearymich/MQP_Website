REM NPM may need to be changed to the relevent env variable.
REM Check that npm is install if command does not run.

@echo off
set NPM=npm
echo "Starting React Frontend..."
cd ../mqp-frontend-23
%NPM% start
PAUSE