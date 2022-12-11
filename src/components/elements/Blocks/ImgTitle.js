import Button from "../Button";

const ImgTitleBlock = ({ block, curCount, blockLength, colBreak }) => {
  return (
    <div
      className={`d-flex flex-column align-items-center p-lg-2 p-1 my-4 h-100 ${block.addClass}`}
    >
      <div className="w-100 mb-3">
        <img src={block.img} className="w-100" alt="" />
      </div>
      <h3 className="h5 mb-3 text-center">{block.title}</h3>
      <p
        className="fs-7 mb-3 text-center"
        dangerouslySetInnerHTML={{ __html: block.copy }}
      />
      {block.button && (
        <Button
          copy={`${block.button.copy}`}
          copyHidden={`${block.title}`}
          url={block.button.url}
          addClass="bg-white border border-secondary mt-auto fs-7"
        />
      )}
    </div>
  );
};

export default ImgTitleBlock;
