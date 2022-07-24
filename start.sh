#!/bin/bash
service nginx restart
service apache2 restart
node express_demo.js
