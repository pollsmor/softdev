#!/usr/bin/python3
import sys
sys.path.insert(0,"/var/www/tedx/")
sys.path.insert(0,"/var/www/tedx/tedx/")

import logging
logging.basicConfig(stream=sys.stderr)

from tedx import app as application
