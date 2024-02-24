function JsonStringify() {
  const squares = [1, 4, 16, 25, 37];
  return (
      <>
          <h3>Json Stringify</h3>
          squares = {JSON.stringify(squares)}
      </>
  );
}
export default JsonStringify;