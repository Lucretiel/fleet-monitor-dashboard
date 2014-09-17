fleet-monitor-dashboard
=======================

The dashboard component to the fleet-monitor-server service.

Disclaimer
----------

This is the first webapp I've ever made- previously, I had never use angular or json, bower or npm, or created anything other that some basic plain HTML. Also, it was all made in roughly 2 days. The quality from a "best-practices" standpoint is, I imagine, pretty bad; in the future I'd like to redo it with a yeoman skeleton.

Usage
-----

Requires angularjs and bootstrap to be installed in the root of the project in bower_components. To run, just serve the root directory with your static webserver of choice. I used `python3 -m http.server`, but I imagine NodeJS or something else works just as well.

TODO / Planned features
-----------------------

- Redo properly
  - bootstrap project with yeoman
  - tests tests tests
  - tests
  - modularize
- Add machines tab
  - Column for each machine, with units in the columns, showing the task distribution across the colors
