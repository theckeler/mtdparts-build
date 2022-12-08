import Button from "../elements/Button";

const ImgTitleBlock = ({ block }) => {
  return (
    <div
      className={`d-flex flex-column align-items-center px-2 py-4 border-bottom ${block.addClass}`}
    >
      <div className="w-100 mb-3">
        <img src={block.img} className="w-100" alt="" />
      </div>
      <h3 className="mb-3 text-center">{block.title}</h3>
      <p
        className="fs-7 mb-3 text-center"
        dangerouslySetInnerHTML={{ __html: block.copy }}
      />
      {block.button && (
        <Button
          copy={block.button.copy}
          url={block.button.url}
          addClass="bg-white border border-secondary"
          addLabel={block.title}
          //addClick=""
        />
      )}
    </div>
  );
};

export default ImgTitleBlock;
