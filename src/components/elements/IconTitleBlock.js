import Button from "../elements/Button";

import { ReactComponent as iconShipping } from "../images/icon-shipping.svg";
import { ReactComponent as iconReturns } from "../images/icon-returns.svg";
import { ReactComponent as iconChat } from "../images/icon-chat.svg";
import { ReactComponent as iconLocator } from "../images/icon-service-locator.svg";
import { ReactComponent as iconManual } from "../images/icon-manual.svg";
import { ReactComponent as iconKnowledgeCenter } from "../images/icon-knowledge-center.svg";

const IconTitleBlock = ({ block }) => {
  const IconMap = {
    iconShipping: iconShipping,
    iconReturns: iconReturns,
    iconChat: iconChat,
    iconLocator: iconLocator,
    iconManual: iconManual,
    iconKnowledgeCenter: iconKnowledgeCenter,
  };
  let IconName = IconMap[`${block.icon}`];

  return (
    <div
      className={`d-flex flex-column align-items-center p-3 border-bottom ${block.addClass}`}
    >
      <div className={`w-100 mb-3 ${block.iconAddClass}`}>
        <IconName />
      </div>
      <h3 className="mb-3">{block.title}</h3>
      <p
        className="fs-7 mb-3 text-center"
        dangerouslySetInnerHTML={{ __html: block.copy }}
      />
      <small
        className="fs-8 mb-0"
        dangerouslySetInnerHTML={{ __html: block.small }}
      />
      {block.button && (
        <Button
          copy={`${block.button.copy} ${block.title}`}
          url={block.button.url}
          addClass={block.button.addClass}
          addLabel={block.title}
          //addClick=""
        />
      )}
    </div>
  );
};

export default IconTitleBlock;
