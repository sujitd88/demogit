/**
 * @author Pritam Kushwaha
 * @since 4/10/2018, 5:39:45 PM
 * @class  SearchPipe
 * This pipe performs a search operation on the array of objects. It follows the below mentioned steps:
 * -> Checks whether the array is empty, if so return the same empty array.
 * -> Convert filter to lowercase for the purpose of comparing.
 * -> If the passed value is an array and filter exists, removes a field called 'id' because id should not be searched by the user.
 * -> Apply filter on the array.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search',
    pure: false
})
export class SearchPipe implements PipeTransform {

    transform(value: any[], filter: string): any {
        // Check if the array has objects or not
        if (!value || !value.length) {
            return [];
        }
        // Check if the filter is not an empty string
        if (!filter) {
            return value;
        }
        // Convert filter value to lowercase for comparision
        filter = filter.toLowerCase();
        // Check whether filter value exists and the passed value is an array
        if (filter && Array.isArray(value)) {
            // Assuming entire array has same keys in its objects, get an array of keys.
            const keyName = Object.keys(value[0]);
            // Traverse the array of keys and remove a key value pair with key as 'id'
            keyName.forEach((element, index) => {
                if (element.toLowerCase() === 'id') {
                    keyName.splice(index, 1);
                }
            });
            const keys = keyName;
            // Logic to go through all the objects and find the objects whose value matches lowercased filter.
            value = (value.filter((v) => v && keys.some(
                (k) => v[k] === undefined || v[k] === null ? false : v[k].toString().toLowerCase().indexOf(filter) >= 0))
            );
            return value;
        }
    }
}
