const App = () => {
  // return <h1>Hello World from inside React App!</h1>;
  return <TestContainer />;
};

export default App;

const TestContainer = () => {
  return (
    <div id="thisIsTestContainer">
      <TestComponent />
    </div>
  );
};

const TestComponent = () => {
  return (
    <>
      <p>
        this is a test component. It resides within Test Container. It is a
        fragment.
      </p>
    </>
  );
};
