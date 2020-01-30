#!/usr/bin/python3
import sys
sys.path.insert(0, "/var/www/kli00/")
sys.path.insert(0, "/var/www/kli00/kli00/")

import logging
logging.basicConfig(stream = sys.stderr)

from kli00 import app as application
