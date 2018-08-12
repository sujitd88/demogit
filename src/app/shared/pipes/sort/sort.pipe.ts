/**
 * @author Pritam Kushwaha
 * @since 4/10/2018, 5:39:45 PM
 * @class  SortPipe
 * This pipe performs a sort operation on the array of objects. 
 * @example
 * OrderBy: {property: column, direction: direction}. Direction could be 1 for ascending & -1 for descending order.
 * It follows the below mentioned steps:
 * -> Checks whether the array is empty, if so return the same empty array.
 * -> Checks whether the column name string is empty, if so return the same array.
 * -> Performs sorting using array.sort()
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sort' })

export class SortPipe implements PipeTransform {
	transform(records: Array<any>, args?: any): any {
		if (records && records.length !== 0 && args.property !== undefined) {
			return records.sort(function (a, b) {
				if (a[args.property] < b[args.property]) {
					return -1 * args.direction;
				}
				else if (a[args.property] > b[args.property]) {
					return 1 * args.direction;
				}
				else {
					return 0;
				}
			});
		}
		return records;
	};
}
