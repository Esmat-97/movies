import { TestBed } from '@angular/core/testing';

import { GtMovieService } from './gt-movie.service';

describe('GtMovieService', () => {
  let service: GtMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GtMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
