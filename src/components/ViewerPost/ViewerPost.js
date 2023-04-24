import HTMLFlipBook from "react-pageflip";

function ViewerPost() {
  return (
    <HTMLFlipBook width={300} height={500} size="stretch">
      <div className="demoPage">Page 1</div>
      <div className="demoPage">Page 2</div>
      <div className="demoPage">Page 3</div>
      <div className="demoPage">Page 4</div>
    </HTMLFlipBook>
  );
}

export default ViewerPost;
