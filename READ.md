//Mongo

mongo install: sudo apt-get install -y mongodb-org
mongo start : mongod --bind_ip=$IP --nojournal

//Exiting error
remove  /data/db/mongod.lock
mongod --repair