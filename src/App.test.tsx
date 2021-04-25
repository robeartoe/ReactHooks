import React from 'react';
import App from './dimensionsHook';
import renderer, { act } from 'react-test-renderer';
import { mount } from 'enzyme';



describe('App', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(<App />);
  });
  it('Should render correctly - Snapshot', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should have render of 1 at start', () => {
    const renderSpan = wrapper.find('#renders');
    expect(Number(renderSpan.text())).toEqual(1);
  });


  it('Should have width & height of: ', () => {
    const {innerWidth: width, innerHeight: height} = window;
    expect(Number(wrapper.find('#width').text())).toEqual(width);
    expect(Number(wrapper.find('#height').text())).toEqual(height);

  });

});


// const resizeWindow = (x, y) => {
//   window.innerWidth = x;
//   window.innerHeight = y;
//   window.dispatchEvent(new Event('resize'));
// }

describe('App - Resize', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });
  it('Should have rendered once more.', async () => {
    // First Render
    const renderSpan = wrapper.find('#renders');
    expect(Number(renderSpan.text())).toEqual(1);
    // Resize:
    // Change the viewport to 500px.
    global.innerWidth = 500;
    // Trigger the window resize event.
    global.dispatchEvent(new Event('resize'));
    expect(Number(renderSpan.text())).toEqual(2);
  });
  it('Should have different width.', () => {
    let {innerWidth: width} = window;
    expect(Number(wrapper.find('#width').text())).toEqual(width);
    // Resize:
    // Change the viewport to 500px.
    global.innerWidth = 500;
    // Trigger the window resize event.
    global.dispatchEvent(new Event('resize'));
    expect(Number(wrapper.find('#width').text())).toEqual(500);

  });

  it('Should have different height.', () => {
    let { innerHeight: height } = window;
    expect(Number(wrapper.find('#height').text())).toEqual(height);
    // Resize:
    // Change the viewport to 500px.
    global.innerHeight = 500;
    // Trigger the window resize event.
    global.dispatchEvent(new Event('resize'));
    expect(Number(wrapper.find('#height').text())).toEqual(500);
  });
});