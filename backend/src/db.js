import { db } from './config/index'
import { MongoClient } from 'mongodb'

export default callback => {
	// connect to a database if needed, then pass it to `callback`:

    MongoClient.connect(db.uri, function(err, client) {
        err && console.warn('err: ', err);
        const tableName = 'table name';
        const database = client.db(tableName);

		// perform actions on the collection object
        console.log('-- db ' + tableName + 'connection established --');
        callback(database);
        // client.close();
    });
}
