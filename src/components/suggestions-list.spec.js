import SuggestionsList from "./suggestions-list";

describe("suggestion list", () => {
  let props, render;
  beforeEach(() => {
    props = {};

    render = (changedProps = {}) =>
      mount(<SuggestionsList {...props} {...changedProps} />);
  });

  it("not crashing when passing empty props", () => {
    const component = render();
    expect(component.find(`.suggestion-wrapper`).length).toEqual(0);
  });

  it("renders the suggestion list when there are matches for the search string supplied", () => {
    props = {
      activeSuggestionIndex: 0,
      filteredSuggestions: [
        { name: "France", code: "FR" },
        { name: "finland", code: "FI" },
      ],
      handleClick: jest.fn(),
      showSuggestions: true,
      searchString: "F",
    };

    const component = render();
    expect(component.find(`.suggestion-wrapper`).length).toEqual(1);
    expect(component.find(".suggestions").find("li").length).toEqual(2);
    expect(
      component.find(".suggestions").find(".suggestion-active").text()
    ).toEqual("France");
  });

  it("displays the no suggestions available message when there is not match found", () => {
    props = {
      filteredSuggestions: [],
      handleClick: jest.fn(),
      showSuggestions: true,
      searchString: "Af",
    };

    const component = render();
    expect(component.find(".no-suggestions").text()).toEqual(
      "Country not available."
    );
  });
});
