/**
 * @author Pritam Kushwaha
 * @since 4/10/2018, 5:39:45 PM
 * @Pipe   SearchPipe
 * Unit test cases for search pipe
 */
import { SearchPipe } from './search.pipe';

describe('Isolated Unit Test: SearchPipe', () => {
  let searchPipe: SearchPipe;
  beforeEach(() => {
    searchPipe = new SearchPipe();
  });
  it('should exist', () => {
    expect(searchPipe).toBeTruthy();
  });
});
