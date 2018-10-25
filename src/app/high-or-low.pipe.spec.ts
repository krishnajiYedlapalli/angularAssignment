import { HighOrLowPipe } from './high-or-low.pipe';

describe('HighOrLowPipe', () => {
  it('create an instance', () => {
    const pipe = new HighOrLowPipe();
    expect(pipe).toBeTruthy();
  });
});
