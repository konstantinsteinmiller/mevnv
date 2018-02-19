import { version } from '../../package.json';
import { Router } from 'express';
import facets from './facets';
import generateUniqueTrackingNumber, { isValidTrackingNumber } from './tracking'


export default ({ config, db }) => {
    let api = Router();

    // mount the facets resource
    api.use('/facets', facets({ config, db }));

    // perhaps expose some API metadata at the root
    api.get('/', (req, res) => {
        res.status(200).json({ version, text: 'some' });
    });

    // get a tracking object with states etc. by tracking number
    api.get('/get', (req, res) => {

        const details = { '_id': req.query.id };
        // db.collection('collection').findOne(details)
        //     .then(item => {
        //         /* if item exists, send back the item with its states, otherwise send error message */
        //         let json = (item) ? item : { error: `Could not find item information for ${req.query.id}` }
        //         res.status(200).json(json);
        //     }).catch(err => {
        //     console.log('err', err)
        //     res.json({ error: `An error has occurred while searching for ${req.query.id} ${err}`});
        // });

    });

    // create a new tracking number with mocked states data
    api.post('/post', (req, res) => {

        console.log('req', req.body)
        res.json({ error: `Bla Blub Error`});

    });

    /* update existing shipment by tracking number, notice and state to update */
    api.put('/put', (req, res) => {

        console.log('req', req.body)
        res.json({ error: `Bla Blub Error`});

    });

    /* update existing shipment by tracking number, notice and state to update */
    api.delete('/delete', (req, res) => {

        console.log('req', req.query)
        res.json({ error: `Bla Blub Error`});

    });

    return api;
}
