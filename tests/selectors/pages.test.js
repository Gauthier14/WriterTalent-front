import { scrollToTop } from 'src/selectors/pages.js';

describe('scrollToTop', () => {
  it('should scroll to top of the page with smooth behavior', () => {
    const scrollToMock = jest.fn();
    // Mock the scrollTo function on the window object
    window.scrollTo = scrollToMock;

    scrollToTop();

    // Verify that the scrollTo function was called with the expected parameters
    expect(scrollToMock).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});
