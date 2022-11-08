/**
 * getItem function, use this to get find data from your collection
 */
import {getCollection} from '../_serializer/getCollection';

export const getItem = (collection, search, success, failure) => {

    /* Call getCollection function */
    getCollection(
        collection,
        (data) => {
            // finded object point to this
            let find;

            data.forEach((element) => {
                // each time same key found we plus this
                let its_same = 0;
                Object.keys(search).forEach((key) => {
                    if (element.hasOwnProperty(key)) {
                        if (element[key] === search[key]) {
                            its_same += 1;
                            if (Object.keys(search).length === its_same) {
                                // Find : D
                                find = element;
                                return;
                            };
                        }
                        else {
                            // make it zero
                            its_same = 0;
                            return;
                        };
                    }
                    else {
                        its_same = 0;
                        return;
                    };
                });
            });
            // Search done return result
            success(find);
        },
        (error) => failure(error)
    );

};