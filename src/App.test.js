import App from "./App";

describe("SearchWithAutoCompete", () => {
  let props, render;

  beforeEach(() => {
    props: {
      entries: [];
    }
    render = (changedProps = {}) => mount(<App {...props} {...changedProps} />);
  });

  it("renders without crashing", () => {
    const component = render();
    expect(component.find(".search-with-autocomplete").length).toEqual(1);
    expect(component.find(".App-header").text()).toEqual(
      "Start typing country name and get suggestions to autocomplete."
    );
    expect(component.find(".search-input").length).toEqual(1);
  });
});
