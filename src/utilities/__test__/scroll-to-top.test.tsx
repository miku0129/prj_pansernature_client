import { render } from "@testing-library/react";
import ScrollToTop from "../scroll-to-top";

const MockPage = () => {
  // console.log(window.scrollY);
  return <div>Mock</div>;
};
const MockComponent = () => {
  return (
    <div>
      <ScrollToTop />
      <MockPage />
    </div>
  );
};

jest.mock("react-router-dom", () => {
  return {
    useLocation: () => ({
      pathname: "hoge",
    }),
  };
});

const spyScrollTo = jest.fn();
Object.defineProperty(global.window, "scrollTo", { value: spyScrollTo });

describe("ScrollToTop", () => {
  test("scroll up the page", () => {
    render(<MockComponent />);
    // fireEvent.scroll(window, { target: { scrollY: 100 } });

    expect(spyScrollTo).toHaveBeenCalledTimes(1);
    expect(spyScrollTo).toBeCalledWith(0, 0);
  });
});
